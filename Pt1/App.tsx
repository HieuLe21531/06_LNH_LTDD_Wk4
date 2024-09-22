import { StatusBar } from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {

  const [quantity, setQuantity] = useState(1);

  const inc = () => {
    setQuantity(quantity + 1);
  };

  const dec = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  let cost = 141.800
  const finalPrice = (cost, quantity) => {
    return cost * quantity
  }

  return (
    <View style={styles.container}>
      {/*1st Area*/}
      <View style={{flex:4 ,backgroundColor: "#ffffff", }}>
        <View style={styles.bookarea}>
          {/* Img Area */}
          <View style={{flex: 1}}>
            <Image source={require('../Pt1/assets/book.png')}></Image>
          </View>
          {/* Text and Btn area */}
          <View style={{flex: 2}}>
            <View>
              <Text>Nguyên hàm tích phân và ứng dụng</Text>
            </View>
            <View>
              <Text>Cung cấp bởi Tiki Trading</Text>
            </View>
            <View>
              <Text style={{color: 'red', fontWeight: `bold`}}>141.800 đ</Text>
            </View>
            <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
              <Button title={"-"} onPress={dec}></Button>
              <Text>{quantity}</Text>
              <Button title={"+"} onPress={inc}></Button>
            </View>
          </View>
        </View>
        {/* Text-only Area */}
        <View style={{flex: 2,}}>
          <View style={{flexDirection: 'row', alignItems:'flex-start'}}>
            <View style={{flex: 4}}>
              <Text>Mã giảm giá đã lưu</Text>
            </View>
            <View style={{flex: 3}}>
              <Text style={{color: '#134FEC'}}>Xem tại đây</Text>
            </View>
            <View style={{flex: 3}}></View>
          </View>
        </View>
        {/* Coupon Area */}
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 3}}>
            <TextInput placeholder={'Mã giảm giá'}></TextInput>
          </View>
          <View style={{flex: 2}}>
            <Button title={'Áp dụng'}></Button>
          </View>
        </View>
      </View>
      {/* 2nd Area */}
      <View style={{flex: 1,flexDirection:'row', backgroundColor: "#ffffff"}}>
        <View style={{flex: 7, flexWrap: 'nowrap'}}>
          <Text>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={{color:'#134fec'}}>Nhập tại đây</Text>
        </View>
      </View>
      {/* 3rd  Area */}
      <View style={{flex: 1, flexDirection: 'row', backgroundColor: "#ffffff"}}>
        <View style={{flex: 2}}>
          <Text>Tạm tính</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={{color: 'red', fontWeight: `bold`}}>{finalPrice(cost, quantity).toFixed(3)} đ</Text>
        </View>
      </View>
      {/*Final Area */}
      <View style={{flex: 2, flexDirection: 'column', backgroundColor: "#ffffff", alignItems: 'flex-end'}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 2}}>
            <Text style={{color: '#808080;'}}>Thành tiền</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={{color: 'red', fontWeight: `bold`}}>{finalPrice(cost, quantity).toFixed(3)} đ</Text>
          </View>
        </View>
        <View>
          <Button title={'TIẾN HÀNH ĐẶT HÀNG'}></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#c4c4c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookarea: {
    flex: 3,
    flexDirection: 'row'
  }
});
