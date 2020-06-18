import React from "react";
import styles from "./NavSideBar.module.scss";
import NavItems from "./components/NavItems";
import {studentConfig} from './components/RenderConfig/Config';
import Canvas from './components/Canvas';

class NavSideBar extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this); 
    this.state= {
      canvasOn:false,
      canvasItem:[],
      current:"Dashboard",
    }
  }
  renderNavItem() {
  let renderArray =[];
  studentConfig.forEach(obj => {
    if (obj.filler) {
        renderArray.push(
          //id 以后可以改
          <div className={styles.filler}></div>
        );
    } else {
      renderArray.push(
        //id 以后可以改
        <NavItems
          active={this.state.current === obj.id}
          collapse={this.state.canvasOn}
          key={"id" + obj.title}
          icon={obj.icon}
          title={obj.title}
          id={obj.id}
          onClick={this.handleClick}
        />
      );
    }
  })
  return renderArray;
} 
  changeCurrent(name){
    this.setState({
      current:name,
    })
  }
  clickToDisplayCanvas(name){
    if (name === this.state.current) {
      this.setState({
        canvasOn: !this.state.canvasOn,
        canvasItem: [],
      });
    }else if(name !== this.state.current){
      //这个method 好像不太好，因为吃performance，之后要想想怎么处理这个问题
      this.setState({
        canvasOn: false,
        canvasItem: [],
      },()=>this.setState({
          canvasOn: true,
          canvasItem: [],
        }))
    }
  }
  handleClick(event,name){
    event.preventDefault();
    this.clickToDisplayCanvas(name);
    this.changeCurrent(name);
  }
  render(){
    return (
      <div className={styles.wrapper}>
        <div
          className={`${styles.sideWrapper} + ${
            this.state.canvasOn ? null : styles.sideWrapperNotCollapse
          }`}
        >
          {this.renderNavItem()}
        </div>
        <div
          className={this.state.canvasOn ? styles.canvasActive : styles.canvas}
        >
          {this.state.canvasOn ? <Canvas current={this.state.current}/> :null}
        </div>
      </div>
    );
  }
}

export default NavSideBar;