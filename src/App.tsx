import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { TextField, Stack, DefaultButton } from '@fluentui/react/lib';
import { QRCamera } from "@root/QRCamera";
import { switch2print } from "@root/common/label_printer";

const Example = () => {
  const [qrvalue, setQrValue] = useState('');
  const [isCamera, setCamera] = useState(false);
  const showCamera = () => setCamera(true);
  const hideCamera = () => setCamera(false);

  const onScan = (scanData: string) => {
    setQrValue(scanData);
    hideCamera();

    if (false) {
      switch2print(window.location, '案件名', new Date(), scanData);
    }
  };

  return (
    <Stack tokens={{ childrenGap: 20, maxWidth: 380, padding: 10 }}>
      <TextField
        label="QRデータ"
        value={qrvalue}
        onChange={(__, newValue) => {
          setQrValue(newValue!)
        }}
      />
      <DefaultButton onClick={isCamera ? hideCamera : showCamera}>QRカメラ{isCamera ? '非表示' : '表示'}</DefaultButton>
      {isCamera && <QRCamera onScan={onScan} />}
    </Stack>
  );
};

const App: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Example} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
