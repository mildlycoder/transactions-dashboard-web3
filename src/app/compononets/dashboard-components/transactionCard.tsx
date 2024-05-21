import { ITransaction } from '@/types'
interface TransactionCardProps {
    transaction: ITransaction;
}

export default function TransactionCard(props: TransactionCardProps) {

    const { transaction } = props;
    return (
        <div className="bg-blue-400 rounded-sm m-5 p-5">
            <h1 className="text-xl">sender address: {transaction.from} </h1>
            <h1 className="text-xl">reciever address: {transaction.to} </h1>
            <h1 className="text-xl">value: {transaction.value} </h1>
        </div>
    );
}
