# Link Shield

  - [1. Project Description](#1-project-description)
  - [2. Features](#2-features)
  - [3. Technologies Used](#3-technologies-used)
  - [4. Prerequisites](#4-prerequisites)
  - [5. Installation](#5-installation)
    - [5.1. Clone the Repository](#51-clone-the-repository)
    - [5.2. Access the Project Directory](#52-access-the-project-directory)
    - [5.3. Install Dependencies](#53-install-dependencies)
  - [6. Execution](#6-execution)
    - [6.1. Start the Application](#61-start-the-application)
    - [6.2. Access to the Application](#62-access-to-the-application)

## 1. Project Description
Link Shield is a decentralized application (dapp) developed using Next.js and JavaScript, with a focus on monetizing digital content and links. The platform allows users to protect any URL (files, pages, etc.) by setting a price for access. A unique, hashed version of the link is then created and registered on the blockchain. The original link owner can access it normally, while new users must pay the set fee (plus a small commission) via their Web3 wallet (MetaMask) to gain access. Once paid, the user has access to the link. All transactions are public and traceable on the BNB Smart Chain Testnet.

## 2. Features
* **Link Protection:** Users can set a price to protect any URL.
* **Web3 Wallet Integration:** Allows users to connect their MetaMask wallet to register new links and pay for protected content.
* **Decentralized Registration:** Links and access fees are registered on the BNB Smart Chain Testnet via a smart contract.
* **Unique Hashed Links:** A unique, hashed version of the link is generated to be shared with other users.
* **Access Control:** The system checks whether a user is the link owner or if they have paid the required fee to grant access.
* **Traceability:** All transactions, including payments for link access, can be publicly verified on the BSCScan testnet.

## 3. Technologies Used
* **Next.js:** For building the front-end application.
* **JavaScript:** The main programming language used for the dapp.
* **Tailwind CSS:** For styling the user interface.
* **Shadcn:** For a simple and elegant component library.
* **Web3.js:** For interactions with the MetaMask wallet and smart contract.
* **Object-hash:** For generating unique hashes for the protected links.

## 4. Prerequisites
* **Node.js**: For the Next.js framework.
* **Web3 Wallet**: An account with a Web3 wallet like MetaMask, configured for the BNB Smart Chain Testnet.
* **Transaction Hash**: A transaction hash can be checked on the **BSCScan Testnet** at: `https://testnet.bscscan.com/address/0xd5d25f3857dcc6d5e70361a066115a491857ca9a`.

## 5. Installation
### 5.1. Clone the Repository
```sh
git clone https://github.com/Naanon/link-shield.git
```

### 5.2. Access the Project Directory
```sh
cd link-shield
```

### 5.3. Install Dependencies
```sh
npm install
```

## 6. Execution
### 6.1. Start the Application
```sh
npm run dev
```

### 6.2. Access to the Application
* The application can be accessed at **http://localhost:3000**
