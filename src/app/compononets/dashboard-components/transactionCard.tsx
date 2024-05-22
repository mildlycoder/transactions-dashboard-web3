import { ITransaction } from '@/types'
interface TransactionCardProps {
    transaction: ITransaction;
}

export default function TransactionCard(props: TransactionCardProps) {

    const { transaction } = props;
    return (
        <div className="bg-blue-400 bg-gradient-to-r from-blue-600 to-violet-600 rounded-md mx-auto p-5 w-[95%] lg:w-[60%] flex flex-col gap-5">
            <div className="flex items-center gap-3">
                <h1 className="text-md flex flex-col">
                <span>From</span>
                    {transaction.from}
                </h1>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </div>
                <h1 className="text-md flex flex-col">
                <span>To</span>
                    {transaction.to}
                </h1>
            </div>
            <h1 className="text-xl flex flex-col">
                value
               <span className="text-3xl">{transaction.value}</span>
            </h1>
        </div>
    );
}
