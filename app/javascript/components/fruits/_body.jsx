import React from "react";
import AllFruits from "./_all_fruits";
import ShowModal from "./_modal";
import NewFruit from "./_new_fruit";

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      fruits: [],
      fruit: { id: "", name: "", description: "" },
      mode: "save",
      isModalVisible: false,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleFormSubmit(values) {
    const url = "fruits/";
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network error.");
      })
      .then((fruit) => {
        this.addNewFruit(fruit);
      })
      .catch((err) => console.error("Error: " + err));
  }

  handleDelete(id) {
    const url = `fruits/${id}`;
    fetch(url, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (response.ok) {
        console.log("Item was deleted", response);
        this.deleteFruit(id);
      } else {
        throw new Error("Network Error!");
      }
    });
  }

  handleEdit(fruit) {
    this.setState({ fruit: fruit, mode: "update" });
  }

  handleModal(fruit) {
    this.setState({ fruit: fruit, mode: "update", isModalVisible: true });
  }

  handleModalClose() {
    this.setState({ isModalVisible: false });
  }

  handleUpdate(fruit) {
    const url = `fruits/${fruit.id}`;
    fetch(url, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fruit: fruit }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("update success");
          this.updateFruit(fruit);
        } else {
          console.log(response.message);
        }
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  }

  updateFruit(fruit) {
    let newFruits = this.state.fruits.filter((f) => f.id !== fruit.id);
    newFruits.push(fruit);
    this.setState({
      fruits: newFruits,
      mode: "save",
    });
  }

  deleteFruit(id) {
    let newFruits = this.state.fruits.filter((fruit) => fruit.id !== id);
    this.setState({
      fruits: newFruits,
    });
  }

  addNewFruit(fruit) {
    this.setState({ fruits: this.state.fruits.concat(fruit) });
  }

  componentDidMount() {
    fetch("/fruits.json")
      .then((response) => response.json())
      .then((data) => this.setState({ fruits: data }));
  }

  render() {
    return (
      <div>
        <NewFruit
          fruit={this.state.fruit}
          mode={this.state.mode}
          handleFormSubmit={this.handleFormSubmit}
          handleEdit={this.handleEdit}
          handleUpdate={this.handleUpdate}
        />

        <ShowModal
          fruit={this.state.fruit}
          mode={this.state.mode}
          isModalVisible={this.state.isModalVisible}
          handleModalClose={this.handleModalClose}
        />
        <AllFruits
          fruits={this.state.fruits}
          handleDelete={this.handleDelete}
          handleModal={this.handleModal}
        />
      </div>
    );
  }
}

export default Body;
