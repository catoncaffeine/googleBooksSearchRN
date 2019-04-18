import React, {Component} from "react";
import logo from "../catoncaffeine.jpeg";
import {
    View,
    Image,
    Animated,
    StyleSheet,
    Easing
} from "react-native";

export default class Logo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            rotateDegree: new Animated.Value(0),
        }
    }

    componentDidUpdate(prevProps) {
        if(!prevProps.loading && this.props.loading) {
            Animated.timing(
                this.state.rotateDegree,
                {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.linear,
                }
            ).start();
            setTimeout(this.stopRotation, 1000);
        }
    }

    stopRotation = () => {
        this.setState({
            rotateDegree: new Animated.Value(0),
        })
    };

    render() {
        let rotation = this.state.rotateDegree.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "360deg"]
        });
        return(
            <View style={styles.logo}>
                <Animated.Image
                    source={logo}
                    style={{
                        transform: [
                            {scale: 1},
                            {rotateY: rotation},
                            {perspective: 1000}, // without this line this Animation will not render on Android while working fine on iOS
                        ]
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        flex: 4
    }
});