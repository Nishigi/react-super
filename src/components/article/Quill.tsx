import React from "react";
import * as ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

const modules = {
    toolbar: [
        ['image', 'link'],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean']
    ]
}

export default (props) => {
    const { value, onChange } = props
    return (
        <div className="quill">
            <ReactQuill
                modules={modules}
                value={value}
                onChange={val => onChange && onChange(val)}
                theme='snow'
            />
        </div>
    )
}
// export class Quill extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: "",
//         }
//     }

//     modules = {
//         toolbar: [
//             [{ 'header': [1, 2, false] }],
//             ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//             [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
//             ['link', 'image'],
//             ['clean']
//         ],
//     }

//     formats = [
//         'header',
//         'bold', 'italic', 'underline', 'strike', 'blockquote',
//         'list', 'bullet', 'indent',
//         'link', 'image'
//     ]

//     render() {
//         console.log(this.props);
//         // this.props.onChange('22')
//         return (
//             <div className="text-editor">
//                 <ReactQuill theme="snow"
//                     modules={this.modules}
//                     formats={this.formats}>
//                 </ReactQuill>
//             </div>
//         );
//     }
// }

