import React, {useContext} from 'react';
import {View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Context from '../context/Context';

const labels = ['Pembeli', 'Pesanan', 'Diskon', 'Hasil'];

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#1AAE48',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#1AAE48',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#1AAE48',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#1AAE48',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#1AAE48',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#1AAE48',
};

const Steps = () => {
  const {currentPosition} = useContext(Context);

  return (
    <View style={{marginBottom: 10}}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentPosition}
        labels={labels}
        stepCount={4}
      />
    </View>
  );
};

export default Steps;
