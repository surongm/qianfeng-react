
## npm
 npm 官网 
  https://www.npmjs.com

小表情官网  
  https://emojipedia.org/
  
## setState
  // 修改数据使用setState方法 可以有两个参数
  // 第一种参数又有两种情况，第一种情况是传一个对象
  // this.setState ({
  //     isLike: !this.state.isLike
  // })

  // 第二种情况是一个方法  
  // setState 是异步的
  this.setState ((prevState) => {
      console.log(prevState)
      console.log("内部的")
      return {
          isLike: !prevState.isLike
      }
  },() => {
      // 由于setState是异步的，如果要获取到最新的state，要在这个回调里获取
      // 就是界面渲染的状态
      console.log("最新的",this.state.isLike)
  })
  console.log("外部的",this.state.isLike)

