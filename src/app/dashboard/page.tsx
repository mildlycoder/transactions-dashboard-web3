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
    const response = await getData()
    console.log(response)
    return (
        <div className="flex flex-col bg-black min-h-screen">
            <h1 className="text-2xl text-white"> welcome to web3 tracker</h1>
            <div className="mt-5">
                {
                    (response.result) &&
                    response?.result?.map((transaction: ITransaction) => {
                        return <TransactionCard key={transaction.hash}
                            transaction={transaction} />;
                    })
                }
            </div>
        </div>
    );
}
