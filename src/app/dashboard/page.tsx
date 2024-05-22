import { ITransaction } from "@/types";
import TransactionCard from "../compononets/dashboard-components/transactionCard";

const getData = async () => {
    const apiKey = process.env.etherscanKey;

    const addresses = [
        '0xa83114A443dA1CecEFC50368531cACE9F37fCCcb',
    ];

    const url = `https://api.etherscan.io/api`
        + `?module=account`
        + `&action=txlist`
        + `&address=${addresses.join(',')}`
        + `&tag=latest`
        + `&page=1`
        + `&offset=5`
        + `&sort=ascapikey=${apiKey}`;
    const res = await fetch(url, { cache: "no-store" })
    return res.json()
}

export default async function Dashboard() {
    /*  const response = await getData() */
    const list = [
        {
            blockNumber: '18971034',
            timeStamp: '1704823007',
            hash: '0x0261b59ef5ffae43e73398eda68b926927b686320db430cd5342bc8b5d5fef60',
            nonce: '2',
            blockHash: '0xbb09f418604e5dfae4020f3fb38a3d081f93ddc6bd71a0105fcb8435835991ee',
            transactionIndex: '161',
            from: '0xa83114a443da1cecefc50368531cace9f37fcccb',
            to: '0xa8c62111e4652b07110a0fc81816303c42632f64',
            value: '27278630897672930',
            gas: '21000',
            gasPrice: '22139128176',
            isError: '0',
            txreceipt_status: '1',
            input: '0x',
            contractAddress: '',
            cumulativeGasUsed: '14607928',
            gasUsed: '21000',
            confirmations: '953271',
            methodId: '0x',
            functionName: ''
        }, {
            blockNumber: '18971034',
            timeStamp: '1704823007',
            hash: '0x0261b59ef5ffae43e73398eda68b926927b686320db430cd5342bc8b5d5fef60',
            nonce: '2',
            blockHash: '0xbb09f418604e5dfae4020f3fb38a3d081f93ddc6bd71a0105fcb8435835991ee',
            transactionIndex: '161',
            from: '0xa83114a443da1cecefc50368531cace9f37fcccb',
            to: '0xa8c62111e4652b07110a0fc81816303c42632f64',
            value: '27278630897672930',
            gas: '21000',
            gasPrice: '22139128176',
            isError: '0',
            txreceipt_status: '1',
            input: '0x',
            contractAddress: '',
            cumulativeGasUsed: '14607928',
            gasUsed: '21000',
            confirmations: '953271',
            methodId: '0x',
            functionName: ''
        }, {
            blockNumber: '18971034',
            timeStamp: '1704823007',
            hash: '0x0261b59ef5ffae43e73398eda68b926927b686320db430cd5342bc8b5d5fef60',
            nonce: '2',
            blockHash: '0xbb09f418604e5dfae4020f3fb38a3d081f93ddc6bd71a0105fcb8435835991ee',
            transactionIndex: '161',
            from: '0xa83114a443da1cecefc50368531cace9f37fcccb',
            to: '0xa8c62111e4652b07110a0fc81816303c42632f64',
            value: '27278630897672930',
            gas: '21000',
            gasPrice: '22139128176',
            isError: '0',
            txreceipt_status: '1',
            input: '0x',
            contractAddress: '',
            cumulativeGasUsed: '14607928',
            gasUsed: '21000',
            confirmations: '953271',
            methodId: '0x',
            functionName: ''
        }, {
            blockNumber: '18971034',
            timeStamp: '1704823007',
            hash: '0x0261b59ef5ffae43e73398eda68b926927b686320db430cd5342bc8b5d5fef60',
            nonce: '2',
            blockHash: '0xbb09f418604e5dfae4020f3fb38a3d081f93ddc6bd71a0105fcb8435835991ee',
            transactionIndex: '161',
            from: '0xa83114a443da1cecefc50368531cace9f37fcccb',
            to: '0xa8c62111e4652b07110a0fc81816303c42632f64',
            value: '27278630897672930',
            gas: '21000',
            gasPrice: '22139128176',
            isError: '0',
            txreceipt_status: '1',
            input: '0x',
            contractAddress: '',
            cumulativeGasUsed: '14607928',
            gasUsed: '21000',
            confirmations: '953271',
            methodId: '0x',
            functionName: ''
        }, {
            blockNumber: '18971034',
            timeStamp: '1704823007',
            hash: '0x0261b59ef5ffae43e73398eda68b926927b686320db430cd5342bc8b5d5fef60',
            nonce: '2',
            blockHash: '0xbb09f418604e5dfae4020f3fb38a3d081f93ddc6bd71a0105fcb8435835991ee',
            transactionIndex: '161',
            from: '0xa83114a443da1cecefc50368531cace9f37fcccb',
            to: '0xa8c62111e4652b07110a0fc81816303c42632f64',
            value: '27278630897672930',
            gas: '21000',
            gasPrice: '22139128176',
            isError: '0',
            txreceipt_status: '1',
            input: '0x',
            contractAddress: '',
            cumulativeGasUsed: '14607928',
            gasUsed: '21000',
            confirmations: '953271',
            methodId: '0x',
            functionName: ''
        },
    ]
    return (
        <div className="flex flex-col bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen">
            <h1 className="text-2xl m-5 p-5 text-white"> welcome to web3 tracker</h1>
            <div className="flex flex-col gap-5">
                {
                    (list) &&
                    list.map((transaction: ITransaction) => {
                        return <TransactionCard key={transaction.hash}
                            transaction={transaction} />;
                    })
                }
            </div>
        </div>
    );
}
