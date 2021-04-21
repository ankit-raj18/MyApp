import React from 'react';
import {View,Text , ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem=(props) =>{
        const {name,tagline,image, taglineCTA}=props.cars;

    return (
     
        <View style={styles.carContainer}>

        <ImageBackground source={image}
        style={styles.image}
        />

      <View style={styles.titles }>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline} {''}
        <Text style={styles.subtitleCTA}>
                {taglineCTA}
                

        </Text>
        
        
        </Text>


      </View>

<View style={styles.buttonContainer}>
      <StyledButton  type="primary" content={'Custom order'} onPress={()=> console.warn("Custom order was pressed")} />
      <StyledButton  type="secondary" content={'Existing Inventory'} onPress={()=> console.warn("Existing Inventory was pressed")}/>

</View>

      </View>



    );
}

export default CarItem;