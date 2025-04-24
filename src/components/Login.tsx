"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Eye, EyeOff } from "lucide-react"
import styles from "@/styles/Login.module.scss"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [formType, setFormType] = useState<"login" | "signup" | "epic">("login")
  const [activeTab, setActiveTab] = useState<"email" | "epic">("email")
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  })
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(`${formType} attempt with:`, credentials)
    // Add your authentication logic here
  }

  const switchToSignUp = () => {
    setFormType("signup")
  }

  const switchToLogin = () => {
    setFormType("login")
    setActiveTab("email")
  }

  const switchTab = (tab: "email" | "epic") => {
    setActiveTab(tab)
    setFormType(tab === "epic" ? "epic" : "login")
  }

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = activeTab === "email" ? "translateX(0)" : "translateX(100%)"
    }
  }, [activeTab])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.heroSection}></div>

        <div className={styles.formSection}>
          <div className={styles.formWrapper}>
            <div className={styles.heading}>
              <div className={styles.headerLine}></div>
              <h1 className={styles.title}>
                {formType === "login" ? "LOG IN" : formType === "signup" ? "SIGN UP" : "EPIC GAMES SIGN UP"}
              </h1>
            </div>

            {formType !== "signup" && (
              <div className={styles.toggleButtonContainer}>
                <div className={styles.toggleButtonWrapper}>
                  {/* Background Slider */}
                  <div ref={sliderRef} className={styles.toggleSlider} />

                  {/* Button Container */}
                  <div className={styles.toggleButtons}>
                    <button
                      className={`${styles.toggleButton} ${activeTab === "email" ? styles.activeToggleText : ""}`}
                      onClick={() => switchTab("email")}
                      type="button"
                    >
                      Email Log In
                    </button>

                    <button
                      className={`${styles.toggleButton} ${activeTab === "epic" ? styles.activeToggleText : ""}`}
                      onClick={() => switchTab("epic")}
                      type="button"
                    >
                      Epic Games Sign Up
                    </button>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Regular Sign Up Form */}
              {formType === "signup" && (
                <>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={credentials.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={credentials.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <div className={styles.passwordLabel}>
                      <label htmlFor="password">Referral Code (optional)</label>
                    </div>
                    <input
                      type="text"
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="confirmPassword">Where did you hear about us?</label>
                    <input
                      type= "text"

                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <div className={styles.passwordLabel}>
                      <label htmlFor="password">Password (must include special)</label>
                      <button
                        type="button"
                        className={styles.showHideBtn}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <>
                            <EyeOff className={styles.eyeIcon} size={16} />
                            <span>Hide</span>
                          </>
                        ) : (
                          <>
                            <Eye className={styles.eyeIcon} size={16} />
                            <span>Show</span>
                          </>
                        )}
                      </button>
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={credentials.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.actionButtons}>
                    <button type="button" className={styles.backBtn} onClick={switchToLogin}>
                      BACK
                    </button>
                    <button type="submit" className={styles.signUpButton}>
                      SUBMIT
                    </button>
                  </div>

                  <div className={styles.loginLink}>
                    <span>Already have an account?</span>{" "}
                    <Link href="#" onClick={switchToLogin}>
                      Log in
                    </Link>
                  </div>
                </>
              )}

              {/* Epic Games Sign Up Form */}
              {formType === "epic" && (
                <>
              

                  <div className={styles.inputGroup}>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={credentials.username}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <div className={styles.passwordLabel}>
                      <label htmlFor="password">Referral Code (optional)</label>
                    </div>
                    <input
                      type="text"
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="confirmPassword">Where did you hear about us?</label>
                    <input
                      type= "text"

                    />
                  </div>

                  <button type="submit" className={styles.signUpButton}>
                    SIGN UP
                  </button>

                  <div className={styles.epicLoginContainer}>
                    <button type="button" className={styles.epicLoginButton}>
                      <Image
                        src="/background/epiclogo.png"
                        alt="Epic Games"
                        width={24}
                        height={24}
                        className={styles.epicLogo}
                      />
                      Log in with Epic Games
                    </button>
                  </div>
                </>
              )}

              {/* Login Form */}
              {formType === "login" && (
                <>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">Phone number, user name, or email address</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={credentials.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <div className={styles.passwordLabel}>
                      <label htmlFor="password">Your password</label>
                      <button
                        type="button"
                        className={styles.showHideBtn}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <>
                            <EyeOff className={styles.eyeIcon} size={16} />
                            <span>Hide</span>
                          </>
                        ) : (
                          <>
                            <Eye className={styles.eyeIcon} size={16} />
                            <span>Show</span>
                          </>
                        )}
                      </button>
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.actionButtons}>
                    <button type="button" className={styles.signUpBtn} onClick={switchToSignUp}>
                      SIGN UP
                    </button>
                    <button type="submit" className={styles.loginBtn}>
                      LOG IN
                    </button>
                  </div>

                  <div className={styles.forgotPassword}>
                    <Link href="/forget">Forgot your password?</Link>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
