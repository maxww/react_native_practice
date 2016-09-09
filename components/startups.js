//in root directory run react-native run-ios to refresh simulator
//control command z on simulator, opens web page to use console!

import React, { Component } from 'react'
import {
  View,
  Text,
  ListView,
  StyleSheet
} from 'react-native'

class Startups extends Component{

  constructor(props, context){
    super(props, context)
    this.renderRow = this.renderRow.bind(this)

    const startups = [
      {id:0, name: 'uber', location: 'california', industry:'transportation'},
      {id:1, name: 'instagram', location: 'california', industry:'social'},
      {id:2, name: 'air bnb', location: 'california', industry:'hospitality'},
      {id:3, name: 'birchbox', location: 'new york', industry:'food'},
    ]

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      startups: dataSource.cloneWithRows(startups) //from our array of data
    }
  }

  renderRow(startup, sID, rID){
    return(
      <Text>{startup.name}</Text>
    )
  }

  render(){
    return(
        <ListView style={styles.list} dataSource={this.state.startups} renderRow={this.renderRow}/>
    )
  }
  //ListView minimum needs dataSource and renderRow
}

const styles = StyleSheet.create({
  list: {
    padding: 32
  }
})

export default Startups
