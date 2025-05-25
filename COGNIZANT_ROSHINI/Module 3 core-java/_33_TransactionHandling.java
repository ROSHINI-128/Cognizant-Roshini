
import java.sql.*;

public class TransactionHandling {
    public static void transfer(Connection conn, int fromAcc, int toAcc, double amount) throws SQLException {
        conn.setAutoCommit(false);
        try {
            PreparedStatement debit = conn.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
            debit.setDouble(1, amount);
            debit.setInt(2, fromAcc);
            debit.executeUpdate();

            PreparedStatement credit = conn.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?");
            credit.setDouble(1, amount);
            credit.setInt(2, toAcc);
            credit.executeUpdate();

            conn.commit();
            System.out.println("Transfer successful.");
        } catch (SQLException e) {
            conn.rollback();
            System.out.println("Transfer failed. Rolled back.");
            throw e;
        } finally {
            conn.setAutoCommit(true);
        }
    }
}
