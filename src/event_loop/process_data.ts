interface processDataProps {
  data: number[];
  callback: (data: number[]) => void;
}

function processData({ data, callback }: processDataProps) {}

function printData(data: number[]) {}

export { processData, printData };
