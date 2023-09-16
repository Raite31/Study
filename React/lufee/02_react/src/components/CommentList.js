import React, { Component } from 'react';
function Comment(props){
    const {id,content,author} = props.comment
    return(
        <div>
            <p>{id}</p>
            <p>{content}</p>
            <p>{author}</p>
        </div>
    )
}
// 聪明式组件设计成类 傻瓜式组件仅单纯展示
export default class CommentList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: [],
		};
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				comments: [
					{
						id: 1,
						author: 'facebook',
						content: 'react非常好',
					},
					{
						id: 2,
						author: '刘语熙',
						content: 'Vue更好',
					},
				],
			});
		}, 1000);
	}
	render() {
		return (
            <div>
                {
                    this.state.comments.map((item,i)=>{
                        return(
                            <Comment key={item.id} comment={item}/>
                        )
                    })
                }
            </div>
        );
	}
}
