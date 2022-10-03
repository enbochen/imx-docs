---
title: "Get started"
slug: "/guides-new/get-started"
keywords: [imx-dx]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Guides provide information on how to execute key functionality of the Immutable X platform.

Each guide will provide information on how to:
* Use our [Core SDK](/docs/sdks) (sometimes with the [Wallet SDK](/sdk-docs/wallet-sdk-web/overview)) to build on the [StarkEx settlement layer](/docs/overview-new/immutable-layer-2#layer-2s-on-immutable-x)
* Extend or integrate with our StarkNet contracts to build on the [StarkNet settlement layer](/docs/overview-new/immutable-layer-2#layer-2s-on-immutable-x)

## Install and initialize the Core SDK

The [Core SDK](/sdk-docs/core-sdk-ts/overview) is a wrapper around our [API](/reference) and provides the bulk of the functionality of the Immutable X platform. Before you can start using the Core SDK, you must initialize the client.

Initialize the Core SDK client with the network on which you want your application to run:

| Network | Description |
| -- | -- |
| Sandbox | The default test network (currently, it is Goërli)  |
| Ropsten | Ropsten test network (to be deprecated soon) |
| Production | Ethereum network  |

<Tabs>
  <TabItem value="typescript" label="Typescript Core SDK">

1. Install the npm package
```shell
npm install @imtbl/core-sdk --save
# or
yarn add @imtbl/core-sdk
```

2. Initialize the SDK with the correct environment:
```ts
import { ImmutableX, Config } from '@imtbl/core-sdk';

const config = Config.SANDBOX; // Or Config.PRODUCTION or Config.ROPSTEN
const client = new ImmutableX(config);
```
  </TabItem>
  <TabItem value="kotlin" label="Kotlin (JVM) Core SDK">

1. Add Maven Central to your repositories:
```kotlin
repositories {
    mavenCentral()
}
```

2. Add the dependency to your app's `build.gradle` file:

```kotlin
dependencies {
    implementation 'com.immutable.sdk:imx-core-sdk-kotlin-jvm:$version'
}
```

3. Initialize the SDK with the correct environment:
```kotlin
ImmutableXCore.setBase(ImmutableXBase.Ropsten) // Or ImmutableXBase.Production (default)
```

  </TabItem>
  <TabItem value="Swift" label="Swift Core SDK">

### Pre-requisites:
* iOS 13.0 or macOS 10.15
* Swift 5.5

### Steps:
1. In your Swift package manager - `Package.swift`:

```swift
dependencies: [
    .package(url: "https://github.com/immutable/imx-core-sdk-swift.git", from: "0.2.2")
]
```

2. In your `Podfile`:
```swift
platform :ios, '13.0'
use_frameworks!

target 'MyApp' do
  pod 'ImmutableXCore'
end
```

3. Initialize the SDK with the correct environment:
```swift
ImmutableXCore.initialize(base: .ropsten) // Or .production
```
  </TabItem>
  <TabItem value="go" label="Golang Core SDK">

### Pre-requisites:
The supported go versions are `1.18` or above.

### Steps:
1. Install the go package:
```shell
go get github.com/immutable/imx-core-sdk-golang 
```

2. Initialize the SDK with the correct environment:
```go
import (
  "context"
  "fmt"
  "github.com/immutable/imx-core-sdk-golang/generated/api"
  "github.com/immutable/imx-core-sdk-golang/config"
)

func initializeSDK() {
  configuration := api.NewConfiguration()

  apiClient := api.NewAPIClient(configuration)

  ctx := context.WithValue(context.Background(), api.ContextServerIndex, config.Sandbox) // Or config.Production
}
```
  </TabItem>
</Tabs>