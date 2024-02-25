import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import {v4} from 'uuid'
import 'react-quill/dist/quill.snow.css';
import { getDatabase, ref, push,serverTimestamp,set,child,get } from 'firebase/database';
import app from '../firebase';
import storage from '../firebase'
import {  getStorage,ref as storageRef , uploadBytes} from "firebase/storage";



function CreatePost() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('uncategorized');
    const [description, setDescription] = useState('');
    const [postcontent, setPostContent] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [message, setMessage] = useState('');

    const POST_CATEGORIES = ['Economics', 'Maths', 'Physics', 'Coding', 'Engineering', 'Literature'];

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['code-block', { 'script': 'sub' }],
            [{ 'copy-code': 'Copy Code' }],
            ['clean']
        ],
        clipboard: {
            matchVisual: false,
        }
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'code-block'
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title.trim() === '' || description.trim() === '') {
            setMessage('Please fill out all required fields.');
            return;
        }

        // Clear any previous error message
        setMessage('');

        const postData = {
            title,
            category,
            description,
            postcontent,
            thumbnail: thumbnail ? thumbnail.name : '',
            timestamp: serverTimestamp(),
        };

       

        const uploadImage = async () => {

            const storage = getStorage(app);


            if  (thumbnail == null) return;
            const imageRef = storageRef(storage,`images/${thumbnail.name + v4()}`);
            try {
                await uploadBytes(imageRef, thumbnail);
              } catch (error) {
                console.error('Error uploading image', error);
              }
        };
        



        const db = getDatabase(app);


        try {
            // Get the current count of posts
            const postsRef = ref(db, 'posts');
            const snapshot = await get(child(postsRef, 'count'));
            let count = 1;
            if (snapshot.exists()) {
                count = snapshot.val() + 1;
            }
    
            // Push the new post with the incremented count as ID
            const newPostRef = child(ref(db, 'posts'), String(count));
            await set(newPostRef, postData);
    
            // Update the count of posts
            await set(child(postsRef, 'count'), count);
    
            await uploadImage();
            setMessage('Post successfully added!');
            // Clear form fields
            setTitle('');
            setCategory('');
            setDescription('');
            setThumbnail('');
            setPostContent('');
        } catch (error) {
            console.error('Error adding post to the database:', error);
            setMessage('Failed to add post. Please try again.');
        }
    };

    return (
        <section className='create-post'>
            <div className='container'>
                <h2>Create a Post</h2>
                {message && <p className='form_error_message'>{message}</p>}
                <form className='form create-post-form' onSubmit={handleSubmit}>
                    <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus />
                    <select name='Category' value={category} onChange={e => setCategory(e.target.value)}>
                        {POST_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                    <input type='text' placeholder='Description' value={description} onChange={e => setDescription(e.target.value)} autoFocus />
                    <ReactQuill className='custom-quill' modules={modules} formats={formats} value={postcontent} onChange={setPostContent} />
                    <input key={thumbnail} className='attach' type='file' onChange={e => setThumbnail(e.target.files[0])} accept='png,jpg,jpeg' />
                    <button type='submit' className='btn primary'>Create</button>
                </form>
            </div>
        </section>
    );
}

export default CreatePost;
