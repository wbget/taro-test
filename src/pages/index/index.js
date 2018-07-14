import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import './index.less';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  onClick(){
    Taro.navigateTo({
      url: '/pages/index/next'
    });
  }
  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button onClick={this.onClick}>跳转</Button>
      </View>
    );
  }
}

