import {Dimensions, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: Dimensions.get('window').height,
    alignSelf: 'stretch',
  },
  wallPic: {
    flex: 1,
    resizeMode: 'cover',
    height: Dimensions.get('screen').height / 1.7,
    width: Dimensions.get('screen').width,
    alignSelf: 'center',
  },
  userTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 70
  },
  titleName: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'flex-start'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  smallerName: {
    fontSize: 14
  },
  profilePic: {
    borderRadius: 80,
    marginLeft: '2%',
    marginRight: '2%',
    width: Dimensions.get('screen').width / 8,
    height: Dimensions.get('screen').height / 16,
    resizeMode: 'cover',
  },
  postDescription: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    height: 60,
  },
  firstCommentContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    flex: 1,
  },
  firstComment: {
    flex: 1,
    paddingLeft: '3%',
    paddingTop: '3%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  postUserName: {
    flex: 0,
    flexWrap: 'wrap',
    fontSize: 17
  },
  postFirstComment: {
    flex: 2,
    flexWrap: 'wrap',
    fontSize: 17
  },
  comments: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flex: 1,
    height: 40,
  },
  commentInput: {
    height: 45,
    borderColor: 'gray',
    flex: .6,
    borderWidth: .8,
    borderRadius: 3,
  },
  commentPageContainer: {
    flex: 1,
    width: '100%',
    marginLeft: '2%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  commentPage: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: 'auto',
    marginBottom: 10,
    marginTop: 10
  },
  commentStyle: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 18,
  },
  commentStyleUser: {
    flexWrap: 'wrap',
    fontSize: 20,
    fontWeight: 'bold'
  },
  commentTitleContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2%'
  },
  commentTitle: {
    fontSize: 22
  }
});
