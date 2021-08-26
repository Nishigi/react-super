import React, { useEffect, useState } from "react";
import Quill from "@/components/article/Quill";
import { Form, Input, Button, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

import { getCates, articleModify } from "@/store/reducers/article";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Select } from 'antd';
const { Option } = Select;

export default () => {
    const dispatch = useAppDispatch()
    const cateList = useAppSelector(({ article }) => article.cateList)

    const [article, setArticle] = useState({
        title: '',
        author: '',
        img: '',
        cate: '',
        content: ''
    })

    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
    ]);

    /* 上传s*/
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const onPreview = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow && imgWindow.document.write(image.outerHTML);
    };
    /* 上传e*/

    useEffect(() => {
        // dispatch(articleModify())
        dispatch(getCates())
    }, [])

    // useEffect(() => {
    //     console.log('article', article);
    // }, [article])

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };


    const submit = (values: any) => {
        dispatch(articleModify(article))
    };

    return (
        <div className="article">
            <div className="article-modify">
                <Form
                    style={{ background: 'white', padding: '20px' }}
                    {...layout}
                    name="nest-messages"
                    validateMessages={validateMessages}
                    labelAlign='right'
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 12 }}
                >
                    <Form.Item label="标题">
                        <Input value={article.title} onChange={e => setArticle({ ...article, title: e.target.value })} />
                    </Form.Item>
                    <Form.Item label="作者">
                        <Input value={article.author} onChange={e => setArticle({ ...article, author: e.target.value })} />
                    </Form.Item>
                    <Form.Item label="类别">
                        <Select style={{ width: 120 }} onChange={val => setArticle({ ...article, cate: val && val })} >
                            {
                                cateList && cateList.map((ele: any) => <Option key={ele._id} value={ele.cate}>{ele.cate_zh}</Option>)
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item label="图片" rules={[{ type: 'number', min: 0, max: 99 }]}>
                        <ImgCrop rotate>
                            <Upload
                                action="http://localhost:9999"
                                listType="picture-card"
                                fileList={fileList}
                                onChange={onChange}
                                onPreview={onPreview}
                                name={''}
                            >
                                {fileList.length < 1 && '+ Upload'}
                            </Upload>
                        </ImgCrop>
                    </Form.Item>
                    <Form.Item label="内容">
                        <Quill value={article.content} onChange={(e) => { setArticle({ ...article, content: e }) }}></Quill>
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" onClick={submit}>提交</Button>
                    </Form.Item>

                </Form>
            </div>
        </div >
    );
}