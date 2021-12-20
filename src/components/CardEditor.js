import "../styles/CardEditor.css";

import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";
import EditButtons from "./EditButtons";

class CardEditor extends Component {
  state = {
    text: this.props.text || ""
  };

  handleChangeText = event => this.setState({ text: event.target.value });

  onEnter = e => {
    const { text } = this.state;

    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.onSave(text);
    }
  };

  render() {
    const { text } = this.state;
    const { onSave, onCancel, onDelete, adding } = this.props;

    return (
      <div className="Edit-Card">
        <div className="Card">
          <TextareaAutosize
            autoFocus
            className="Edit-Card-Textarea"
            placeholder="Thêm Công Việc Mới..."
            value={text}
            onChange={this.handleChangeText}
            onKeyDown={this.onEnter}
          />
        </div>
        <EditButtons
          handleSave={() => onSave(text)}
          saveLabel={adding ? "Thêm Công Việc" : "Lưu"}
          handleDelete={onDelete}
          handleCancel={onCancel}
        />
      </div>
    );
  }
}

export default CardEditor;
