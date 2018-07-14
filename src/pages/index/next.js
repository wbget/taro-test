import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

export default class Next extends Component {
  config = {
    navigationBarTitleText: 'Next'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    );
  }
}

