// This is for demonstration purposes i dont know how to use crypto

export async function encrypt(data: any): Promise<string> {
    return Buffer.from(JSON.stringify(data)).toString("base64")
  }
  
  export async function decrypt(encryptedData: string): Promise<any> {
    try {
      const decrypted = Buffer.from(encryptedData, "base64").toString()
      return JSON.parse(decrypted)
    } catch (error) {
      console.error("Decryption error:", error)
      return null
    }
  }
  