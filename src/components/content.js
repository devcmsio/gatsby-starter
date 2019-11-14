import React from 'react';
import { Editor, EditorState, convertFromRaw } from 'draft-js';

class Contnet extends React.Component {
  constructor(props) {
    super(props);

    let content;
    try {
      content = EditorState.createWithContent(convertFromRaw(JSON.parse(props.content)));
    } catch {
      content = EditorState.createEmpty();
    }

    this.state = { content: content };
  }

  render() {
    return <Editor readOnly={true} editorState={this.state.content}/>;
  }
}

export default Contnet;
