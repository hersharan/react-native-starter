import {
  DragContainer,
  Draggable,
  DropZone
} from "react-native-drag-drop-and-swap";


// Main component to render
class DraggyInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ["blue", "blueviolet", "brown", "chocolate", "coral", "cornflowerblue", "darkcyan", "darkgoldenrod", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategrey"]
    };
  }
  render() {
    if (this.props.dragOver && !this.props.ghost && !this.props.dragging) {
      LayoutAnimation.easeInEaseOut();
      return (<View
        style={{
          width: this.props.dragOver ? 110 : 100,
          alignItems: "center",
          justifyContent: "center",
          height: this.props.dragOver ? 110 : 100,
          backgroundColor: "rgba(255,0,0,.7)"
        }}
      >
        <Text
          style={{
            color: this.state.color[this.props.index],
            fontSize: 50,
            fontWeight: "bold"
          }}
        >
          {" "}
          {this.props.alphabet.data}{" "}
        </Text>
      </View>
      );
    }
    let shadows = {
      shadowColor: "black",
      shadowOffset: { width: 0, height: 20 },
      shadowOpacity: 0.5,
      shadowRadius: 20,
      opacity: 0.5
    };
    return (
      <View
        style={[
          {
            height: 100,
            width: 100,
            backgroundColor: this.props.ghost
              ? this.state.color[this.props.index]
              : this.state.color[this.props.index + 4],
            alignItems: "center",
            justifyContent: "center"
          },
          this.props.dragging ? shadows : null
        ]}
      >
        <Text
          style={{
            color: this.state.color[this.props.index],
            fontSize: 50,
            fontWeight: "bold"
          }}
        >
          {this.props.alphabet.data}
        </Text>
      </View>
    );
  }
}

//Drag helper
class Draggy extends React.Component {
  render() {
    return (
      <Draggable data={this.props.alphabet} style={{ margin: 7.5 }}>
        <DropZone
          onDrop={e => this.props.onDrop(e, this.props.index)}
          onEnter={e =>
            this.props.onHover(this.props.alphabet, this.props.index)
          }
        >
          <DraggyInner
            alphabet={this.props.alphabet}
            index={this.props.index}
          />
        </DropZone>
      </Draggable>
    );
  }
}
// Genertaing data to display
let alphaData = [];
let first = "A",
  last = "L";
for (var i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {
  alphaData.push({ data: eval("String.fromCharCode(" + i + ")"), id: i });
}

//Main screen
class DDNS extends Component {
  constructor(props) {
    super(props);
    this.displayName = "DragDropTest";
    this.onDrop = this.onDrop.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.state = {
      alphabets: alphaData,
      hoverData: {},
      dropData: {},
      hoverDataIndex: null
    };
  }
  onDrop(data, index) {
    let alphabets = this.state.alphabets.map((item, i) => {
      if (item.id == data.id) {
        return this.state.hoverData;
      }
      if (item.id == this.state.hoverData.id) {
        return data;
      }
      return item;
    });
    this.setState({ alphabets });
  }
  onDelete(e) {
    let data = this.state.alphabets || [];
    let alphabets = data.map((item, i) => {
      if (e.id === item.id) {
        return { id: e.id, data: "" };
      } else {
        return item;
      }
    });
    this.setState({ alphabets });
  }

  onHover(hoverData, hoverDataIndex) {
    this.setState({ hoverData, hoverDataIndex });
  }
  render() {
    return (
      <DragContainer>
        <View style={{ flex: 1, justifyContent: "space-around" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center", color: "#f900f9" }}>Drag Drop and Swap</Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "flex-end",
              flexDirection: "row",
              flexWrap: "wrap"
            }}
          >
            {this.state.alphabets.map((item, i) => (
              <Draggy
                key={i}
                alphabet={item}
                onHover={this.onHover}
                onDrop={this.onDrop}
                index={i}
              />
            ))}
          </View>
        </View>
      </DragContainer>
    );
  }
}