import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Picker, Switch, Button,Modal,TextInput} from 'react-native';
import { Card } from 'react-native-elements';
//import DatePicker from 'react-native-datepicker';

class Reservation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            guests: 1,
            smoking: false,
			showModal: false
        
        }
    }

    
toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }

    handleReservation() {
        console.log(JSON.stringify(this.state));
        this.setState({
            guests: 1,
            smoking: false
            
        });
    }
	
    resetForm() {
        this.setState({
            guests: 1,
            smoking: false,
            
            showModal: false
        });
    }
    
    render() {
        return(
            <ScrollView>
			<Card  style={{width:200, height:200, borderRadius: 80, borderColor:'maroon'}}>
			<View felx Top style={{ flex: 1 , alignItems: 'center',flexDirection:'column',paddingTop:0}}>
			 <View style={styles.formRow}><Text style={styles.formLabel}>Name: </Text>
			 <TextInput placeholder="Name" /></View>
			  
                <View style={styles.formRow}>
                <Text style={styles.formLabel}>Reason</Text>
                <Picker
                    style={styles.formItem}
                    selectedValue={this.state.guests}
                    onValueChange={(itemValue, itemIndex) => this.setState({guests: itemValue})}>
                    <Picker.Item label="Fertility" value="Fertility" />
                    <Picker.Item label="Laproscopy" value="Laproscopy" />
                    <Picker.Item label="Obasity" value="Obasity" />
                    <Picker.Item label="Gynacology" value="Gynacology" />
                    <Picker.Item label="Childcare" value="Childcare" />
                    <Picker.Item label="Hairloss" value="Hairloss" />
					<Picker.Item label="Skincare" value="Skincare" />
					<Picker.Item label="Pregnanct Vare" value="Pregnanct Vare" />
					<Picker.Item label="Cancer" value="Cancer" />
                </Picker>
                </View>
				<View style={styles.formRow}><Text style={styles.formLabel}>Contact No: </Text>
			 <TextInput placeholder="Enter Contact No" /></View>
                <View style={styles.formRow}>
                <Text style={styles.formLabel}>Smoking/Non-Smoking?</Text>
                <Switch
                    style={styles.formItem}
                    value={this.state.smoking}
                    onTintColor='#512DA8'
                    onValueChange={(value) => this.setState({smoking: value})}>
                </Switch>
                </View>
                <View style={styles.formRow}>
                <Text style={styles.formLabel}>Date and Time</Text>
                
                </View>
                <View style={styles.formRow}>
                <Button
                    onPress={() => this.handleReservation()}
                    title="Reserve"
                    color="#512DA8"
                    accessibilityLabel="Learn more about this purple button"
                    />
                </View>
				
				</View>
				</Card>
            </ScrollView>
        );
    }

};

const styles = StyleSheet.create({
    formRow: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row',
      margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
	});

export default Reservation;