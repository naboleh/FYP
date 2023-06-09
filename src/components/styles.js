import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-end',
    },
    
    landingBG: {
        height: hp('100%'),
        width: wp('100%'),
    },

    btnContainer: {
        flexDirection: 'row',
        paddingTop: hp('35%'),
        justifyContent: 'center',
    },

    startBtn: {
        backgroundColor: '#ffff',
        width: wp('25%'),
        height: hp('7.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3.3%'),
        flexDirection: 'row',
        margin: ('1%'),
    },
    
    btnText: {
        fontSize: wp('4%'),
        fontFamily: 'Quicksand-Medium',
        fontWeight: 'bold',
        color: '#2e2d27',
    },
    AudioText: {
            fontSize: wp('3.5%'),
            fontFamily: 'Quicksand',
            color: '#2e2d27',
            fontStyle: 'italic',
            textDecorationLine: 'underline',
    },

    P1text: {
        fontSize: wp('3.7%'),
        fontFamily: 'Quicksand-Bold',
        color: '#2e2d27',
        padding: wp('5%'),
        lineHeight: hp('5%'),
        top: hp('3%'),
        textAlign: 'justify',
    },
    
    AudioBtnP1E:{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: wp('15%'),
        height: hp('4.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('1%'),
        flexDirection: 'row',
        left: wp('5%'),
        top: hp('1%'),
    },

    nextBtn1: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('63%'),
    },

    P2text: {
        justifyContent: 'space-between',
        fontSize: wp('3.7%'),
        fontFamily: 'Quicksand-Bold',
        color: '#2e2d27',
        padding: wp('5%'),
        lineHeight: hp('5%'),
        top: hp('60%'),
        textAlign: 'justify',
    },

    AudioBtnP2E:{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: wp('15%'),
        height: hp('4.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('1%'),
        flexDirection: 'row',
        left: wp('5%'),
        top: hp('58%'),
    },

    nextBtn2: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('58%'),
    },

    nextBtn2E: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('63%'),
    },

    P3text: {
        fontSize: wp('3.7%'),
        fontFamily: 'Quicksand-Bold',
        color: '#2e2d27',
        padding: wp('5%'),
        lineHeight: hp('4.8%'),
        top: hp('1.8%'),
        textAlign: 'justify',
    },

    P3textM: {
        fontSize: wp('3.3%'),
        fontFamily: 'Quicksand-Bold',
        color: '#2e2d27',
        padding: wp('5%'),
        lineHeight: hp('4.5%'),
        top: hp('1.8%'),
        textAlign: 'justify',
    },

    AudioBtnP3:{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: wp('15%'),
        height: hp('4.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('1%'),
        flexDirection: 'row',
        left: wp('5%'),
        bottom: hp('5%'),
    },

    nextBtn3: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('46.5%'),
    },

    nextBtn3E: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('49.5%'),
    },

    P4text: {
        fontSize: wp('3.7%'),
        fontFamily: 'Quicksand-Bold',
        color: '#2e2d27',
        padding: wp('5%'),
        lineHeight: hp('3.8%'),
        top: hp('1.8%'),
        textAlign: 'justify',
        justifyContent: 'space-between',
    },

    P4textM: {
        fontSize: wp('3.5%'),
        fontFamily: 'Quicksand-Bold',
        color: '#2e2d27',
        padding: wp('5%'),
        lineHeight: hp('3.8%'),
        top: hp('1.8%'),
        textAlign: 'justify',
        justifyContent: 'space-between',
    },

    AudioBtnP4E:{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: wp('15%'),
        height: hp('4.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('1%'),
        flexDirection: 'row',
        left: wp('5%'),
        bottom: hp('1%'),
    },

    nextBtn4: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('55.5%'),
    },

    nextBtn4E: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('51.7%'),
    },

    P5text: {
        fontSize: wp('3.7%'),
        fontFamily: 'Quicksand-Bold',
        color: '#2e2d27',
        padding: wp('5%'),
        lineHeight: hp('4.3%'),
        top: hp('2.5%'),
        textAlign: 'justify',
        justifyContent: 'space-between',
    },

    AudioBtnP5E:{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: wp('15%'),
        height: hp('4.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('1%'),
        flexDirection: 'row',
        left: wp('5%'),
    },

    nextBtn5: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('56.7%'),
    },

    nextBtn5E: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('56.7%'),
    },

    P6text: {
        fontSize: wp('3.7%'),
        fontFamily: 'Quicksand-Bold',
        color: '#2e2d27',
        padding: wp('5%'),
        lineHeight: hp('4.3%'),
        top: hp('2%'),
        textAlign: 'justify',
        justifyContent: 'space-between',
    },

    AudioBtnP6E:{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: wp('15%'),
        height: hp('4.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('1%'),
        flexDirection: 'row',
        left: wp('5%'),
        bottom: hp('5%'),
    },

    AudioBtnP6M:{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: wp('15%'),
        height: hp('4.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('1%'),
        flexDirection: 'row',
        left: wp('5%'),
    },

    nextBtn6: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('52.5%'),
    },

    nextBtn6M: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('56.5%'),
    },

    P7text: {
        fontSize: wp('3.8%'),
        fontFamily: 'Quicksand-Bold',
        color: '#2e2d27',
        padding: wp('5%'),
        lineHeight: hp('4.3%'),
        top: hp('3%'),
        textAlign: 'justify',
        justifyContent: 'space-between',
    },

    AudioBtnP7E:{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: wp('15%'),
        height: hp('4.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('1%'),
        flexDirection: 'row',
        left: wp('5%'),
        top: hp('1%'),
    },

    AudioBtnP7M:{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: wp('15%'),
        height: hp('4.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('1%'),
        flexDirection: 'row',
        left: wp('5%'),
    },

    nextBtn7: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('65.5%'),
    },

    nextBtn7M: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('60.5%'),
    },

    P8text: {
        fontSize: wp('3.8%'),
        fontFamily: 'Quicksand-Bold',
        color: '#2e2d27',
        padding: wp('5%'),
        lineHeight: hp('4.3%'),
        top: hp('3%'),
        textAlign: 'justify',
        justifyContent: 'space-between',
    },

    AudioBtnP8E:{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: wp('15%'),
        height: hp('4.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('1%'),
        flexDirection: 'row',
        left: wp('5%'),
        top: hp('1%'),
    },

    nextBtn8: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('56.8%'),
    },

    nextBtn8M: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('51.5%'),
    },

    P9text: {
        fontSize: wp('3.8%'),
        fontFamily: 'Quicksand-Bold',
        color: '#2e2d27',
        padding: wp('5%'),
        lineHeight: hp('3.5%'),
        top: hp('3%'),
        textAlign: 'justify',
        justifyContent: 'space-between',
    },

    P9Mtext: {
        fontSize: wp('3.5%'),
        fontFamily: 'Quicksand-Bold',
        color: '#2e2d27',
        padding: wp('5%'),
        lineHeight: hp('3.7%'),
        top: hp('3%'),
        textAlign: 'justify',
        justifyContent: 'space-between',
    },

    AudioBtnP9E:{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: wp('15%'),
        height: hp('4.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('1%'),
        flexDirection: 'row',
        left: wp('5%'),
        top: hp('1%'),
    },

    nextBtn9: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('50.2%'),
    },

    nextBtn9M: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('55%'),
    },

    P10text: {
        fontSize: wp('3.8%'),
        fontFamily: 'Quicksand-Bold',
        color: '#2e2d27',
        padding: wp('5%'),
        lineHeight: hp('4.5%'),
        top: hp('3%'),
        textAlign: 'justify',
        justifyContent: 'space-between',
    },

    AudioBtnP10E:{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: wp('15%'),
        height: hp('4.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('1%'),
        flexDirection: 'row',
        left: wp('5%'),
        top: hp('1%'),
    },

    nextBtn10: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('64.9%'),
    },

    P10Mtext: {
        fontSize: wp('3.5%'),
        fontFamily: 'Quicksand-Bold',
        color: '#2e2d27',
        padding: wp('5%'),
        lineHeight: hp('4.2%'),
        top: hp('2%'),
        textAlign: 'justify',
        justifyContent: 'space-between',
    },

    AudioBtnP10M:{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: wp('15%'),
        height: hp('4.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('1%'),
        flexDirection: 'row',
        left: wp('5%'),
        bottom: hp('0.5%'),
    },

    nextBtn10M: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('56%'),
    },

    P11text: {
        fontSize: wp('3.8%'),
        fontFamily: 'Quicksand-Bold',
        color: '#2e2d27',
        padding: wp('5%'),
        lineHeight: hp('4.5%'),
        top: hp('3%'),
        textAlign: 'justify',
        justifyContent: 'space-between',
    },

    AudioBtnP11E:{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: wp('15%'),
        height: hp('4.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('1%'),
        flexDirection: 'row',
        left: wp('5%'),
        top: hp('1%'),
    },

    AudioBtnP11M:{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: wp('15%'),
        height: hp('4.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('1%'),
        flexDirection: 'row',
        left: wp('5%'),
        bottom: hp('4%'),
    },

    nextBtn11: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('64.9%'),
    },

    nextBtn11M: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('59%'),
    },

    P12text: {
        fontSize: wp('3.8%'),
        fontFamily: 'Quicksand-Bold',
        color: '#2e2d27',
        padding: wp('5%'),
        lineHeight: hp('4.5%'),
        top: hp('3%'),
        textAlign: 'justify',
        justifyContent: 'space-between',
    },

    AudioBtnP12E:{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: wp('15%'),
        height: hp('4.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('1%'),
        flexDirection: 'row',
        left: wp('5%'),
        top: hp('1%'),
    },

    nextBtn12: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('60%'),
    },

    P12Mtext: {
        fontSize: wp('3.3%'),
        fontFamily: 'Quicksand-Bold',
        color: '#2e2d27',
        padding: wp('5%'),
        lineHeight: hp('4%'),
        top: hp('2%'),
        textAlign: 'justify',
        justifyContent: 'space-between',
    },

    AudioBtnP12M:{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: wp('15%'),
        height: hp('4.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('1%'),
        flexDirection: 'row',
        left: wp('5%'),
        bottom: hp('4%'),
    },

    nextBtn12M: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('53.3%'),
    },

    P13text: {
        fontSize: wp('3.8%'),
        fontFamily: 'Quicksand-Bold',
        color: '#2e2d27',
        padding: wp('5%'),
        lineHeight: hp('4.5%'),
        top: hp('3%'),
        textAlign: 'justify',
        justifyContent: 'space-between',
    },

    AudioBtnP13E:{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: wp('15%'),
        height: hp('4.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('1%'),
        flexDirection: 'row',
        left: wp('5%'),
        top: hp('1%'),
    },

    nextBtn13: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('64.5%'),
    },

    nextBtn13M: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('64%'),
    },

    P14text: {
        fontSize: wp('3.8%'),
        fontFamily: 'Quicksand-Bold',
        color: '#2e2d27',
        padding: wp('5%'),
        lineHeight: hp('4.5%'),
        top: hp('3%'),
        textAlign: 'justify',
        justifyContent: 'space-between',
    },

    AudioBtnP14E:{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: wp('15%'),
        height: hp('4.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('1%'),
        flexDirection: 'row',
        left: wp('5%'),
        top: hp('1%'),
    },

    nextBtn14: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('60%'),
    },

    P14Mtext: {
        fontSize: wp('3.8%'),
        fontFamily: 'Quicksand-Bold',
        color: '#2e2d27',
        padding: wp('5%'),
        lineHeight: hp('4.5%'),
        top: hp('3%'),
        textAlign: 'justify',
        justifyContent: 'space-between',
    },

    nextBtn14M: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        opacity: '100%',
        width: wp('18%'),
        height: hp('7%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        left: wp('77%'),
        top: hp('63.6%'),
    },

    HomeBtn: {
        backgroundColor: '#ffff',
        width: wp('28%'),
        height: hp('7.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3.3%'),
        flexDirection: 'row',
        margin: ('1%'),
        left: wp('35%'),
        top: hp('70%'),
    },

    QuizBtn: {
        backgroundColor: '#fff',
        width: wp('18%'),
        height: hp('7.5%'),
        borderRadius: wp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: wp('3.3%'),
        flexDirection: 'row',
        left: wp('41%'),
        top: hp('53%'),
    },

});

export default styles;