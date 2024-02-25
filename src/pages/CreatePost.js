import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { getDatabase, ref, push } from 'firebase/database';
import app from '../firebase';

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
        };

        const db = getDatabase(app);
        try {
            await push(ref(db, 'posts'), postData);
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
                    <input key={thumbnail}className='attach' type='file' onChange={e => setThumbnail(e.target.files[0])} accept='png,jpg,jpeg' />
                    <button type='submit' className='btn primary'>Create</button>
                </form>
            </div>
        </section>
    );
}

export default CreatePost;
