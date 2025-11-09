import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Platform, Appearance } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/theme'
import icedCoffeeImg from '@/assets/images/coffee-icon.png'

export default function ContactScreen() {
	const colorScheme = Appearance.getColorScheme()
	const theme = colorScheme === 'dark' ? Colors.dark : Colors.light
	const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView
	const styles = createStyles(theme, colorScheme)

	return (
		<Container contentContainerStyle={styles.container}>
			<Image source={icedCoffeeImg} style={styles.icon} resizeMode="contain" />

			<View style={styles.card}>
				<Text style={styles.title}>Contact Us</Text>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Address</Text>
					<Text style={styles.text}>123 Bean Street{'\n'}Coffeetown, CT 01234</Text>
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Phone</Text>
					<Text style={styles.text}>+1 (555) 123-4567</Text>
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Email</Text>
					<Text style={styles.text}>hello@coffeeshop.example</Text>
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Opening Hours</Text>
					<Text style={styles.text}>Mon–Fri: 7:00 AM – 7:00 PM{'\n'}Sat–Sun: 8:00 AM – 5:00 PM</Text>
				</View>
			</View>
		</Container>
	)
}

function createStyles(theme, colorScheme) {
	return StyleSheet.create({
		container: {
			flexGrow: 1,
			paddingHorizontal: 12,
			paddingTop: 20,
			paddingBottom: 40,
			backgroundColor: theme.background,
			alignItems: 'center',
		},
		icon: {
			width: 120,
			height: 120,
      marginHorizontal: 'auto',
			marginBottom: 12,
			tintColor: colorScheme === 'dark' ? 'papayawhip' : undefined,
		},
		card: {
			width: '100%',
			maxWidth: 600,
			backgroundColor: colorScheme === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
			borderRadius: 16,
			padding: 16,
			alignItems: 'stretch',
			borderWidth: 1,
			borderColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
		},
		title: {
			fontSize: 28,
			fontWeight: '700',
			color: theme.text,
			textAlign: 'center',
			marginBottom: 10,
		},
		section: {
			marginBottom: 12,
		},
		sectionTitle: {
			fontSize: 16,
			fontWeight: '600',
			color: theme.text,
			marginBottom: 4,
			textDecorationLine: 'underline',
		},
		text: {
			color: theme.text,
			fontSize: 14,
			lineHeight: 20,
		},
	})
}