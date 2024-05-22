import { ITransaction } from '@/types';

interface ModalProps {
    transaction: ITransaction;
    onClose: () => void;
}

export default function TransactionModal({ transaction, onClose }: ModalProps) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-5 w-[95%] lg:w-[50%]">
                <button onClick={onClose} className="text-right text-gray-600">Close</button>
                <h2 className="text-2xl mb-4">Transaction Details</h2>
                <p><strong>transactionsIndex:</strong> {transaction.transactionIndex}</p>
                <p><strong>From:</strong> {transaction.from}</p>
                <p><strong>To:</strong> {transaction.to}</p>
                <p><strong>Value:</strong> {transaction.value}</p>
                <p><strong>Contract Address:</strong> {transaction.contractAddress}</p>
                <p><strong>Gas Price:</strong> {transaction.gasPrice}</p>
                <p><strong>Gas:</strong> {transaction.gas}</p>
                <p><strong>Cumulative Gas Used:</strong> {transaction.cumulativeGasUsed}</p>
                <p><strong>Hash:</strong> {transaction.hash}</p>
                <p><strong>Input:</strong> {transaction.input}</p>
                <p><strong>isError:</strong> {transaction.isError}</p>
                <p><strong>Method Id:</strong> {transaction.methodId}</p>
                <p><strong>Block Hash:</strong> {transaction.blockHash}</p>
                <p><strong>Gas Used:</strong> {transaction.gasUsed}</p>
                <p><strong>timestamp:</strong> {transaction.timestamp}</p>
                <p><strong>Confirmations:</strong> {transaction.confirmations}</p>
                <p><strong>Function Name:</strong> {transaction.functionName}</p>
                <p><strong>txreceipt status:</strong> {transaction.txreceipt_status}</p>
                <p><strong>Nonce:</strong> {transaction.nonce}</p>
            </div>
        </div>
    );
}

