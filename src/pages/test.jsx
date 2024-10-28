import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, StyleSheet, } from "react-native";
const Test = () => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.column}>
					<View style={styles.row}>
						<Text style={styles.text}>
							{"9:41"}
						</Text>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={styles.image}
						/>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<View style={styles.view}>
							<View style={styles.box}>
							</View>
						</View>
						<View style={styles.box2}>
						</View>
					</View>
					<View style={styles.absoluteView}>
						<View style={styles.row2}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={styles.image3}
							/>
							<Text style={styles.text2}>
								{"Shelf Life"}
							</Text>
							<Text style={styles.text3}>
								{"Shopping Cart"}
							</Text>
							<View style={styles.row3}>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={styles.image4}
								/>
								<View style={styles.box3}>
								</View>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={styles.image5}
								/>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.row4}>
					<View style={styles.box4}>
					</View>
					<Text style={styles.text4}>
						{"Items"}
					</Text>
					<View style={styles.box5}>
					</View>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={styles.image6}
					/>
					<Text style={styles.text4}>
						{"Edit"}
					</Text>
				</View>
				<View style={styles.column2}>
					<View style={styles.column3}>
						<View style={styles.row5}>
							<View style={styles.box6}>
							</View>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<View style={styles.column4}>
								<Text style={styles.text5}>
									{"The light beyond The Garden wall - Scott Wh..."}
								</Text>
								<Text style={styles.text6}>
									{"$20.0"}
								</Text>
								<View style={styles.row6}>
									<Image
										source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
										resizeMode = {"stretch"}
										style={styles.image8}
									/>
									<View style={styles.box7}>
									</View>
									<Text style={styles.text7}>
										{"1"}
									</Text>
									<View style={styles.box5}>
									</View>
									<View style={styles.box8}>
									</View>
									<Image
										source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
										resizeMode = {"stretch"}
										style={styles.image5}
									/>
								</View>
							</View>
						</View>
						<View style={styles.row5}>
							<View style={styles.view2}>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={styles.image9}
								/>
							</View>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<View style={styles.column4}>
								<Text style={styles.text5}>
									{"The light beyond The Garden wall - Scott Wh..."}
								</Text>
								<Text style={styles.text6}>
									{"$20.0"}
								</Text>
								<View style={styles.row6}>
									<Image
										source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
										resizeMode = {"stretch"}
										style={styles.image8}
									/>
									<View style={styles.box7}>
									</View>
									<Text style={styles.text7}>
										{"1"}
									</Text>
									<View style={styles.box5}>
									</View>
									<View style={styles.box8}>
									</View>
									<Image
										source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
										resizeMode = {"stretch"}
										style={styles.image5}
									/>
								</View>
							</View>
						</View>
						<View style={styles.row7}>
							<View style={styles.box6}>
							</View>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<View style={styles.column4}>
								<Text style={styles.text5}>
									{"The light beyond The Garden wall - Scott Wh..."}
								</Text>
								<Text style={styles.text6}>
									{"$20.0"}
								</Text>
								<View style={styles.row6}>
									<Image
										source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
										resizeMode = {"stretch"}
										style={styles.image8}
									/>
									<View style={styles.box7}>
									</View>
									<Text style={styles.text7}>
										{"1"}
									</Text>
									<View style={styles.box5}>
									</View>
									<View style={styles.box8}>
									</View>
									<Image
										source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
										resizeMode = {"stretch"}
										style={styles.image5}
									/>
								</View>
							</View>
						</View>
						<View style={styles.row8}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<View style={styles.column5}>
								<Text style={styles.text8}>
									{"The light beyond The Garden wall - Scott Wh..."}
								</Text>
								<Text style={styles.text9}>
									{"$20.0"}
								</Text>
								<View style={styles.row6}>
									<Image
										source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
										resizeMode = {"stretch"}
										style={styles.image8}
									/>
									<View style={styles.box7}>
									</View>
									<Text style={styles.text7}>
										{"1"}
									</Text>
									<View style={styles.box5}>
									</View>
									<View style={styles.box8}>
									</View>
									<Image
										source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
										resizeMode = {"stretch"}
										style={styles.image5}
									/>
								</View>
							</View>
						</View>
						<View style={styles.row8}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<View style={styles.column5}>
								<Text style={styles.text8}>
									{"The light beyond The Garden wall - Scott Wh..."}
								</Text>
								<Text style={styles.text9}>
									{"$20.0"}
								</Text>
								<View style={styles.row6}>
									<Image
										source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
										resizeMode = {"stretch"}
										style={styles.image8}
									/>
									<View style={styles.box7}>
									</View>
									<Text style={styles.text7}>
										{"1"}
									</Text>
									<View style={styles.box5}>
									</View>
									<View style={styles.box8}>
									</View>
									<Image
										source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
										resizeMode = {"stretch"}
										style={styles.image5}
									/>
								</View>
							</View>
						</View>
						<View style={styles.row8}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<View style={styles.column5}>
								<Text style={styles.text8}>
									{"The light beyond The Garden wall - Scott Wh..."}
								</Text>
								<Text style={styles.text9}>
									{"$20.0"}
								</Text>
								<View style={styles.row6}>
									<Image
										source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
										resizeMode = {"stretch"}
										style={styles.image8}
									/>
									<View style={styles.box7}>
									</View>
									<Text style={styles.text7}>
										{"1"}
									</Text>
									<View style={styles.box5}>
									</View>
									<View style={styles.box8}>
									</View>
									<Image
										source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
										resizeMode = {"stretch"}
										style={styles.image5}
									/>
								</View>
							</View>
						</View>
						<View style={styles.row9}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<View style={styles.column5}>
								<Text style={styles.text8}>
									{"The light beyond The Garden wall - Scott Wh..."}
								</Text>
								<Text style={styles.text9}>
									{"$20.0"}
								</Text>
								<View style={styles.row6}>
									<Image
										source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
										resizeMode = {"stretch"}
										style={styles.image8}
									/>
									<View style={styles.box7}>
									</View>
									<Text style={styles.text7}>
										{"1"}
									</Text>
									<View style={styles.box5}>
									</View>
									<View style={styles.box8}>
									</View>
									<Image
										source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
										resizeMode = {"stretch"}
										style={styles.image5}
									/>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.absoluteColumn}>
						<View style={styles.row10}>
							<Text style={styles.text10}>
								{"Total"}
							</Text>
							<Text style={styles.text11}>
								{"(24)"}
							</Text>
							<Text style={styles.text12}>
								{"$200.00"}
							</Text>
							<View style={styles.view3}>
								<Text style={styles.text13}>
									{"Buy now"}
								</Text>
							</View>
						</View>
						<View style={styles.row11}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={styles.image10}
							/>
							<View style={styles.view4}>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={styles.image11}
								/>
							</View>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={styles.image12}
							/>
							<View style={styles.box5}>
							</View>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={styles.image13}
							/>
						</View>
						<View style={styles.box9}>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
export default Test;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	absoluteColumn: {
		position: "absolute",
		top: 496,
		left: -25,
		width: 393,
		height: 174,
		backgroundColor: "#F1F3E6",
		shadowColor: "#0000001A",
		shadowOpacity: 0.1,
		shadowOffset: {
		    width: 0,
		    height: -4
		},
		shadowRadius: 16,
		elevation: 16,
	},
	absoluteView: {
		position: "absolute",
		bottom: -47,
		right: 0,
		left: 0,
		height: 48,
		backgroundColor: "#EAEFD1",
		paddingHorizontal: 20,
	},
	box: {
		height: 9,
		backgroundColor: "#000000",
		borderRadius: 2,
		marginTop: 2,
	},
	box2: {
		width: 1,
		height: 4,
		backgroundColor: "#000000",
		marginTop: 5,
	},
	box3: {
		width: 1,
		height: 24,
		backgroundColor: "#50A65C",
	},
	box4: {
		width: 27,
		height: 27,
		backgroundColor: "#F8FAED",
		borderColor: "#50A65C",
		borderRadius: 8,
		borderWidth: 2,
		marginRight: 16,
	},
	box5: {
		flex: 1,
		alignSelf: "stretch",
	},
	box6: {
		width: 27,
		height: 27,
		backgroundColor: "#F8FAED",
		borderColor: "#50A65C",
		borderRadius: 8,
		borderWidth: 2,
		marginRight: 8,
	},
	box7: {
		width: 8,
		height: 20,
		backgroundColor: "#919191",
		marginRight: 5,
	},
	box8: {
		width: 1,
		height: 20,
		backgroundColor: "#919191",
		marginRight: 10,
	},
	box9: {
		height: 5,
		backgroundColor: "#000000",
		borderRadius: 100,
		marginHorizontal: 124,
	},
	column: {
		marginBottom: 68,
	},
	column2: {
		marginHorizontal: 25,
	},
	column3: {
		backgroundColor: "#EAEFD1",
		borderRadius: 16,
		paddingVertical: 8,
		paddingHorizontal: 7,
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 16,
		elevation: 16,
	},
	column4: {
		width: 185,
		alignSelf: "flex-start",
		paddingHorizontal: 1,
		marginTop: 3,
	},
	column5: {
		flex: 1,
		alignSelf: "flex-start",
		paddingHorizontal: 1,
		marginTop: 2,
	},
	image: {
		width: 19,
		height: 12,
		marginRight: 7,
	},
	image2: {
		width: 17,
		height: 12,
		marginRight: 8,
	},
	image3: {
		width: 7,
		height: 12,
		marginRight: 14,
	},
	image4: {
		width: 12,
		height: 12,
	},
	image5: {
		width: 9,
		height: 9,
	},
	image6: {
		width: 12,
		height: 12,
		marginRight: 9,
	},
	image7: {
		borderRadius: 4,
		width: 77,
		height: 109,
		marginRight: 8,
	},
	image8: {
		width: 9,
		height: 1,
		marginRight: 11,
	},
	image9: {
		height: 8,
		marginTop: 9,
	},
	image10: {
		width: 16,
		height: 18,
		marginRight: 29,
	},
	image11: {
		height: 18,
		marginTop: 15,
	},
	image12: {
		width: 16,
		height: 19,
	},
	image13: {
		width: 18,
		height: 20,
	},
	row: {
		flexDirection: "row",
		backgroundColor: "#EAEFD1",
		paddingTop: 26,
		paddingBottom: 7,
		paddingLeft: 53,
		paddingRight: 32,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 12,
	},
	row3: {
		width: 80,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#D9D9D980",
		borderColor: "#50A65C",
		borderRadius: 16,
		borderWidth: 1,
		paddingHorizontal: 19,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F1F3E6",
		borderRadius: 16,
		paddingVertical: 11,
		paddingHorizontal: 15,
		marginBottom: 16,
		marginHorizontal: 25,
		shadowColor: "#00000026",
		shadowOpacity: 0.2,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 16,
		elevation: 16,
	},
	row5: {
		flexDirection: "row",
		justifyContent: "center",
		backgroundColor: "#F8FAED",
		borderRadius: 16,
		paddingTop: 12,
		paddingBottom: 31,
		marginBottom: 16,
		shadowColor: "#0000001A",
		shadowOpacity: 0.1,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 16,
		elevation: 16,
	},
	row6: {
		width: 96,
		height: 20,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F1F3E6",
		borderColor: "#919191",
		borderRadius: 16,
		borderWidth: 1,
		paddingHorizontal: 12,
	},
	row7: {
		flexDirection: "row",
		justifyContent: "center",
		backgroundColor: "#F8FAED",
		borderRadius: 16,
		paddingTop: 12,
		paddingBottom: 31,
		marginBottom: 184,
		shadowColor: "#0000001A",
		shadowOpacity: 0.1,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 16,
		elevation: 16,
	},
	row8: {
		flexDirection: "row",
		backgroundColor: "#F8FAED",
		borderRadius: 16,
		paddingTop: 12,
		paddingBottom: 31,
		paddingLeft: 43,
		paddingRight: 15,
		marginBottom: 16,
		shadowColor: "#0000001A",
		shadowOpacity: 0.1,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 16,
		elevation: 16,
	},
	row9: {
		flexDirection: "row",
		backgroundColor: "#F8FAED",
		borderRadius: 16,
		paddingTop: 12,
		paddingBottom: 31,
		paddingLeft: 43,
		paddingRight: 15,
		shadowColor: "#0000001A",
		shadowOpacity: 0.1,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 16,
		elevation: 16,
	},
	row10: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#232323",
		borderRadius: 32,
		paddingVertical: 8,
		paddingLeft: 33,
		paddingRight: 8,
		marginVertical: 16,
		marginHorizontal: 21,
	},
	row11: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 25,
		marginHorizontal: 76,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#F8FAED",
	},
	text: {
		color: "#000000",
		fontSize: 17,
		marginRight: 4,
		flex: 1,
	},
	text2: {
		color: "#2A7D36",
		fontSize: 17,
		marginRight: 18,
	},
	text3: {
		color: "#2A7D36",
		fontSize: 14,
		marginRight: 32,
	},
	text4: {
		color: "#50A65C",
		fontSize: 14,
	},
	text5: {
		color: "#232323",
		fontSize: 14,
		marginBottom: 15,
		width: 183,
	},
	text6: {
		color: "#D04646",
		fontSize: 20,
		marginBottom: 21,
	},
	text7: {
		color: "#000000",
		fontSize: 14,
	},
	text8: {
		color: "#232323",
		fontSize: 14,
		marginBottom: 15,
		width: 184,
	},
	text9: {
		color: "#D04646",
		fontSize: 20,
		marginBottom: 22,
	},
	text10: {
		color: "#50A65C",
		fontSize: 20,
	},
	text11: {
		color: "#EAEFD1",
		fontSize: 14,
	},
	text12: {
		color: "#FFFFFF",
		fontSize: 17,
	},
	text13: {
		color: "#000000",
		fontSize: 17,
	},
	view: {
		width: 25,
		alignSelf: "flex-start",
		borderColor: "#000000",
		borderRadius: 4,
		borderWidth: 1,
		paddingHorizontal: 2,
		marginRight: 1,
	},
	view2: {
		width: 27,
		alignSelf: "flex-start",
		backgroundColor: "#EAEFD1",
		borderColor: "#50A65C",
		borderRadius: 8,
		borderWidth: 2,
		paddingHorizontal: 9,
		marginRight: 8,
	},
	view3: {
		width: 118,
		alignItems: "center",
		backgroundColor: "#50A65C",
		borderRadius: 32,
		paddingVertical: 14,
	},
	view4: {
		width: 74,
		backgroundColor: "#232323",
		borderRadius: 32,
		paddingHorizontal: 26,
		marginRight: 29,
	},
});
