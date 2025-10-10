export const Transaction = (data) => {
    return (
        <div className="Transaction">
            <table class="transaction-history">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{data.history[0].type}</td>
                        <td>{data.history[0].amount}</td>
                        <td>{data.history[0].currency}</td>
                    </tr>
                    <tr>
                        <td>{data.history[1].type}</td>
                        <td>{data.history[1].amount}</td>
                        <td>{data.history[1].currency}</td>
                    </tr>
                                        <tr>
                        <td>{data.history[2].type}</td>
                        <td>{data.history[2].amount}</td>
                        <td>{data.history[2].currency}</td>
                    </tr>
                                        <tr>
                        <td>{data.history[3].type}</td>
                        <td>{data.history[3].amount}</td>
                        <td>{data.history[3].currency}</td>
                    </tr>
                                        <tr>
                        <td>{data.history[4].type}</td>
                        <td>{data.history[4].amount}</td>
                        <td>{data.history[4].currency}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}