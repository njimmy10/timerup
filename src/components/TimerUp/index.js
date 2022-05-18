import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const TimerUp = (props) => {
	const { action, text, editor, textColor, textSize,_fonts } = props

	const [time, setTime] = React.useState(0)

	React.useEffect(() => {
		if (!editor) {
		const interval = setInterval(() => {
			setTime(time => time + 1)
			
		}, 1000)

		
		return () => clearInterval(interval)
	}}, [])

	React.useEffect(() => {
		if (action) {
			action(time, time / 60)
		}
	}, [time])

	const formattedTime = (time) => {
		const minutes = Math.floor(time / 60)
		const seconds = time % 60
		
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
	}

	const textStyles = {
		text: {
			color: textColor ? textColor : '#424242',
			fontSize: textSize ? textSize : 16,
			padding: 4,
			fontWeight: "bold",
			paddingTop: 0,
		},
	}

	if (props.styles) {
		textStyles.text = {
		  ...textStyles.text,
		  ...props.styles.text,
		}
	}   else if (_fonts) {
		textStyles.text.fontFamily = _fonts.body }

	return (
		<View>
			<Text style={textStyles.text}>{formattedTime(time)}</Text>
		</View>	
	)
	

	}


export default TimerUp
