import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function CreatePost() {

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('uncategorized')
    const [description, setDescription] = useState('')
    const [thumbnail, setThumbnail] = useState('')



    const POST_CATEGORIES = ['Economics', 'Maths', 'Physics', "Coding", 'Engineering', 'Literature']

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['code-block', { 'script': 'sub' }], // Add the code block feature to the toolbar
            [{ 'copy-code': 'Copy Code' }], // Custom button for copying code
            ['clean']
        ],
        clipboard: {
            matchVisual: false,
        }
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'code-block' // Include the code block format
    ]

    return (
        <section className='create-post'>
            <div className='container'>
                <h2>Create a Post</h2>
                <p className='form_error_message'> This is a error message </p>
                <form className='form create-post-form'>

                    <input type='text ' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus />
                    <select name='Category' value={category} onChange={e => setCategory(e.target.value)}>
                        {
                            POST_CATEGORIES.map(cat => <option key={cat}> {cat} </option>)
                        }
                    </select>

                    <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription} />
                    <input type='file' onChange={e => setThumbnail(e.target.files[0])} accept='png,jpg,jpeg' />
                    <button type='submit' className='btn primary'> Create </button>

                </form>

            </div>

        </section>
    )
}

export default CreatePost