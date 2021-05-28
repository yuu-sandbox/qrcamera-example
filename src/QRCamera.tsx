import React, {Component, FC, useState} from 'react';
import QrReader from 'react-camera-qr';

export interface QRCameraProps {
  onScan(data: string): void;
}

const delay = 100;

const previewStyle = {
  height: 320,
  width: 320,
} as const;

export const QRCamera: FC<QRCameraProps> = props => {
  const {onScan} = props;

  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const handleError = (err: Error) => {
    console.error(err);
    setError(err);
  };

  const handleScan = (data: string | null) => {
    if (result != data) {
      setResult(data);
    }

    if (data != null) onScan(data);
  };

  return (
    <div>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{error?.toString()}</p>
      <p>Result: {result}</p>
    </div>
  );
};
