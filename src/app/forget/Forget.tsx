"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "@/styles/Login.module.scss";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    try {
      // Replace with actual API call to reset password
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending reset email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.heroSection}></div>

        <div className={styles.formSection}>
          <div className={styles.formWrapper}>
            <div className={styles.heading}>
              <div className={styles.headerLine}></div>
              <h1 className={styles.title}>FORGOT PASSWORD</h1>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">
                    Enter your email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <p className={styles.resetMessage}>
                  We&apos;ll send you an email with a link to reset your password.
                </p>

                <button 
                  type="submit" 
                  className={styles.signUpButton}
                  disabled={isLoading}
                >
                  {isLoading ? "SENDING..." : "SEND RESET LINK"}
                </button>

                <div className={styles.forgotPassword}>
                  <Link href="/" className={styles.backToLoginLink}>
                    <ArrowLeft size={16} />
                    <span>Back to login</span>
                  </Link>
                </div>
              </form>
            ) : (
              <div className={styles.successContainer}>
                <div className={styles.successMessage}>
                  <h2>Check your inbox</h2>
                  <p>
                    We&apos;ve sent a password reset link to <strong>{email}</strong>. 
                    Please check your email and follow the instructions to reset your 
                    password.
                  </p>
                  <p>
                    If you don&apos;t see the email, please check your spam folder.
                  </p>
                </div>

                <Link href="/" className={styles.backToLoginButton}>
                  <ArrowLeft size={16} className={styles.arrowIcon} />
                  <span>Return to login</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}