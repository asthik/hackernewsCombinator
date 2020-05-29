import React from 'react';

const Storyitem = props => {
    const { created_at, url, points, author, title,
            num_comments } = props.story;
    let domainname = url && new URL(url).hostname;
    let date = new Date(created_at).toDateString();

    return(
        <tr className="storiesRows">
            <td>{num_comments}</td>
            <td>{points}</td>
            <td className="storyDetailsCol">
                <span className='title'>{title}</span>
                <span className='domain'>({domainname})</span>
                <span className='authorname'> by {author}</span>
                <span className='datearea'>{date}</span>
                <span className='hidebtnarea' onClick={props.handleHide}>[ Hide ]</span>
            </td>
        </tr>
    );
}

export default Storyitem;