﻿
Public Class frmMortgage
    Const LOAN_MIN As Integer = 5000
    Const LOAN_MAX As Integer = 900000
    Const INTEREST_MIN As Integer = 0
    Const INTEREST_MAX As Integer = 28
    Const DURATION_MIN As Integer = 12
    Const DURATION_MAX As Integer = 420

    Private Sub validateTextBox(ByVal txtbox As TextBox, ByVal min As Double, ByVal max As Double, ByVal item As String)
        'let the user exit and clear the form with invalid data
        If txtbox.Text <> "" Then
            If Not IsNumeric(txtbox.Text) Then
                ' MessageBox.Show(item & " must be a number.", "Data Entry Error")
                MessageBox.Show(txtbox.Name, " must be a number.")
                txtbox.Focus()
                txtbox.SelectAll()
            Else
                'cast textbox content to integer
                Dim value As Double = 0
                value = Convert.ToDouble(txtbox.Text)
                'compare textbox value to min and max
                If value < min Or value > max Then
                    'set user up to fix invalid data
                    MessageBox.Show("Must be between " & min & _
                            " and " & max & ".", "Data Entry Error")
                    txtbox.Focus()
                    txtbox.SelectAll()
                
                End If
            End If
        End If
    End Sub


    Private Sub txtInterestRate_LostFocus(ByVal sender As Object, ByVal e As System.EventArgs) Handles txtInterestRate.LostFocus

        validateTextBox(txtInterestRate, INTEREST_MIN, INTEREST_MAX, "Interest Rate")
    End Sub

    Private Sub txtLoanAmount_LostFocus(ByVal sender As Object, ByVal e As System.EventArgs) Handles txtLoanAmount.LostFocus

        validateTextBox(txtLoanAmount, LOAN_MIN, LOAN_MAX, "Loan Amount")
    End Sub

    Private Sub frmMortgage_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        clearForm()
        txtLoanAmount.Focus()
       

    End Sub

    Private Sub btnClear_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles btnClear.Click
        'calls function to reset all form properties
        clearForm()
    End Sub
    Private Sub clearForm()
        txtDuration.Text = ""
        txtInterestRate.Text = ""
        txtLoanAmount.Text = ""
        lblPayment.Text = ""
        lblTotalInterest.Text = ""
        txtLoanAmount.Focus()


    End Sub
    Private Function missingData() As Boolean
        'makes sure all user entered feilds have values
        Dim result As Boolean = True
        If txtLoanAmount.Text = "" Then
            MessageBox.Show(txtLoanAmount.Name, "Loan Amount must be a number")
            txtLoanAmount.Focus()
        ElseIf txtInterestRate.Text = "" Then
            MessageBox.Show(txtInterestRate.Name, "Interest Rate must be a number")
        ElseIf txtDuration.Text = "" Then
            MessageBox.Show(txtDuration.Name, "Duration must be a number")
        Else
            result = False
        End If

    End Function

    Private Sub btnAnalyze_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles btnAnalyze.Click
        If Not missingData() Then
            calculatePayment()
        End If


    End Sub
    Private Sub calculatePayment()
        Try
            'cast & asign all values needed for equation
            Dim loanAmount As Double = Convert.ToDouble(txtLoanAmount.Text)
            Dim interestRate As Double = (Convert.ToDouble(txtInterestRate.Text) / 12.0) / 100
            Dim loanDuration As Integer = Convert.ToInt32(txtDuration.Text)
            Dim payment As Double = 0
            Dim totalInterest As Double = 0
            If txtDuration.Text <> "" And txtInterestRate.Text <> "" And txtLoanAmount.Text <> "" Then
                'payment = p * r /(1-(1+r)^(-n))
                If interestRate = 0 Then
                    payment = loanAmount / (Convert.ToDouble(loanDuration))
                    totalInterest = 0
                Else
                    payment = loanAmount * interestRate / (1 - (1 + interestRate) ^ (Convert.ToDouble(-loanDuration)))


                    totalInterest = loanDuration * payment - loanAmount
                End If

                lblPayment.Text = "Payment: " + FormatCurrency(Convert.ToString(payment), 2)
                lblTotalInterest.Text = "Total Interest: " + FormatCurrency(Convert.ToString(totalInterest), 2)

            End If

        Catch ex As Exception
            MessageBox.Show(ex.Message)
        End Try
        
    End Sub


  

    Private Sub txtDuration_LostFocus(ByVal sender As Object, ByVal e As System.EventArgs) Handles txtDuration.LostFocus
        validateTextBox(txtDuration, DURATION_MIN, DURATION_MAX, "Duration")
    End Sub
End Class











