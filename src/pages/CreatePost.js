import React, { useState ,useEffect} from 'react';
import ReactQuill from 'react-quill';
import {v4} from 'uuid'
import 'react-quill/dist/quill.snow.css';
import { getDatabase, ref, push,serverTimestamp,set,get} from 'firebase/database';
import app from '../firebase'
import {  getStorage,ref as storageRef , uploadBytes,getDownloadURL} from "firebase/storage";



function CreatePost() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [postcontent, setPostContent] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [message, setMessage] = useState('');
    const [uniqueID,setUniqueID] = useState('')
    const [submitted, setSubmitted] = useState(false);
    const [firebaseIDs,setFirebaseIDs] = useState([])






    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title.trim() === '' || description.trim() === '' || thumbnail === '') {
            setMessage('Please fill out all required fields.');
            return;
        }

        // Clear any previous error message
        setMessage('');

        try {
            // Upload image
            const imageUrl = await uploadImage();

            // Construct post data with image URL
            const postData = {
                title,
                category,
                description,
                postcontent,
                thumbnail: thumbnail ? thumbnail.name : '',
                thumbnailUrl: imageUrl, // Add image URL to post data
                timestamp: serverTimestamp(),
            };

            // Save post data to real-time database
            await savePostData(postData);
            setSubmitted(true);

            setMessage('Post successfully added!');
            // Clear form fields
            setTitle('');
            setCategory('');
            setDescription('');
            setThumbnail('');
            setPostContent('');
        } catch (error) {
            console.error('Error adding post:', error);
            setMessage('Failed to add post. Please try again.');
        }
    };

    const uploadImage = async () => {
        if (!thumbnail) return ''; // If no image, return empty string

        const storage = getStorage(app);
        const imageRef = storageRef(storage, `images/${thumbnail.name + v4()}`);

        try {
            await uploadBytes(imageRef, thumbnail);
            return await getDownloadURL(imageRef); // Return the download URL of the uploaded image
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error; // Rethrow error to be caught in handleSubmit
        }
    };

    const savePostData = async (postData) => {
        const db = getDatabase(app);
        const newPostRef = push(ref(db, 'posts'));

        setUniqueID(newPostRef.key);

        // Get the current count of posts
        const postsCountRef = ref(db, 'posts_count');
        const snapshot = await get(postsCountRef);
        let count = 1;
        if (snapshot.exists()) {
            count = snapshot.val() + 1;
        }

        // Update the count of posts
        await set(postsCountRef, count);

        // Add the incremental ID to the post data
        postData.id = count;

        // Save the post data under the auto-generated ID
        await set(newPostRef, postData);

        
    };

    useEffect(() => {
        if (submitted && uniqueID !== '') { // Changed uniqueID !== null to uniqueID !== ''
            setFirebaseIDs(prevFirebaseIDs => [...prevFirebaseIDs, uniqueID]);
            console.log(firebaseIDs)
        }
    }, [submitted, uniqueID]);
    


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






    return (
        <section className='create-post'>
            <div className='container'>
                <h2>Create a Post</h2>
                {message && <p className='form_error_message'>{message}</p>}
                <form className='form create-post-form' onSubmit={handleSubmit}>
                    <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus />
                    <select name='Category' value={category}  defaultValue={POST_CATEGORIES[0]}onChange={e => setCategory(e.target.value)}>
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
