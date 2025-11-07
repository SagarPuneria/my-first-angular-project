# MyFirstAngularProject

A comprehensive Angular learning project demonstrating various Angular concepts, features, and best practices. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Features](#-features)
- [Components](#-components)
- [Services](#-services)
- [Models](#-models)
- [Directives](#-directives)
- [Pipes](#-pipes)
- [Getting Started](#-getting-started)
- [API Integration](#-api-integration)
- [Development](#-development)
- [Testing](#-testing)
- [Build](#-build)

## 🚀 Project Overview

This is a learning-focused Angular application that demonstrates:
- Component architecture and communication
- Service-based data management
- HTTP client integration
- Custom directives and pipes
- Form handling with two-way data binding
- Real-time data updates with RxJS
- News API integration
- Stock market data visualization
- Bootstrap UI integration

## 🛠 Technology Stack

- **Framework**: Angular 13.0.0
- **Language**: TypeScript 4.4.3
- **Styling**: CSS3 + Bootstrap 4.0.0
- **HTTP Client**: Angular HttpClient
- **Reactive Programming**: RxJS 7.4.0
- **Testing**: Jasmine + Karma
- **Package Manager**: npm
- **Build Tool**: Angular CLI

## 📁 Project Structure

```
src/
├── app/
│   ├── components/           # Feature components
│   │   ├── child/           # Child component for parent-child communication
│   │   ├── home7/           # Class selector demo component
│   │   ├── home8/           # Class selector demo component
│   │   ├── home9/           # Attribute selector demo component
│   │   ├── india-news/      # India news display component
│   │   ├── news/            # Generic news component with inputs
│   │   ├── parent/          # Parent component for data passing
│   │   ├── stock-records/   # Basic stock records display
│   │   ├── stock-records1/  # Stock records with slicing (0-3)
│   │   ├── stock-records2/  # Stock records with search and add functionality
│   │   ├── stock-records3/  # Stock records with slicing (3+)
│   │   ├── stock-records4/  # Stock records with HTTP service integration
│   │   ├── stock-records-day6/ # Real-time stock updates with subscriptions
│   │   ├── us-news/         # US news display component
│   │   ├── user/            # User component
│   │   ├── user-details/    # User details listing component
│   │   └── user-info/       # User information with toggle functionality
│   ├── common/              # Shared directives
│   │   ├── highlight.directive.ts        # Mouse hover highlighting
│   │   └── highlight-day4.directive.ts   # Enhanced highlighting directive
│   ├── employee/            # Employee component
│   ├── home6/              # Home6 component
│   ├── models/             # TypeScript interfaces
│   │   ├── news.model.ts   # News API response models
│   │   ├── stock.model.ts  # Stock data model
│   │   └── user.model.ts   # User and address models
│   ├── services/           # Business logic services
│   │   ├── news.service.ts        # News API integration
│   │   ├── stock.service.ts       # Stock data management
│   │   └── stock-day6.service.ts  # Real-time stock service
│   ├── shared/             # Shared pipes
│   │   ├── parenthesis.pipe.ts    # Adds parentheses formatting
│   │   └── search.pipe.ts         # Stock search filtering
│   ├── app.component.*     # Root component
│   ├── app.module.ts       # App module with all declarations
│   └── home2.compnent.ts   # Home2 component
├── assets/                 # Static assets
├── environments/           # Environment configurations
│   ├── environment.ts      # Development environment
│   └── environment.prod.ts # Production environment
└── ...
```

## ✨ Features

### 1. **Component Communication**
- Parent-child data passing with `@Input` decorators
- Multiple selector types (element, class, attribute)
- Dynamic styling and conditional rendering

### 2. **Data Management**
- Service-based architecture for data sharing
- HTTP client integration for external APIs
- Local JSON server integration for development

### 3. **Real-time Updates**
- RxJS observables for reactive programming
- Subscription management with proper cleanup
- Timer-based data refreshing

### 4. **User Interface**
- Bootstrap integration for responsive design
- Custom directive for interactive highlighting
- Dynamic styling with property binding

### 5. **Data Filtering & Search**
- Custom search pipe for stock filtering
- Real-time search functionality
- Custom formatting pipes

## 🧩 Components

### Core Components
- **AppComponent**: Root component with news data configuration
- **EmployeeComponent**: Employee information display

### News Components
- **NewsComponent**: Reusable component with country-specific news display
- **IndiaNewsComponent**: India-specific news fetching
- **UsNewsComponent**: US-specific news fetching

### Stock Components
- **StockRecordsComponent**: Basic stock display with hardcoded data
- **StockRecords1Component**: First 3 stocks with background color selection
- **StockRecords2Component**: Remaining stocks with search and add functionality
- **StockRecords3Component**: Sliced stock data (index 3+)
- **StockRecords4Component**: HTTP service-based stock data
- **StockRecordsDay6Component**: Real-time stock updates with subscriptions

### User Components
- **UserComponent**: Basic user display
- **UserInfoComponent**: User info with edit/update functionality
- **UserDetailsComponent**: Multiple user records display

### Utility Components
- **ParentComponent**: Demonstrates parent-child communication
- **ChildComponent**: Receives data from parent component
- **Home6-9Components**: Demonstrate different selector types

## 🔧 Services

### NewsService
```typescript
- getNewsBycountry(countryCode: string): Observable<INewsResponse>
- getMergedNewsData(): Observable with merged country news
```

### StockService
```typescript
- getStocks(): IStockDetails[] - Returns hardcoded stock data
- getStocksFromJsonDataServer(): Observable<any> - Fetches from local JSON server
```

### StockDay6Service
```typescript
- getStocks(): Observable<IStockDetails[]> - Returns observable stock data
```

## 📊 Models

### IStockDetails
```typescript
interface IStockDetails {
  id: number;
  stockName: string;
  stockMarketCap: number;
  stockMSector: string;
  releaseDate: string;
  symbol: string;
}
```

### INewsResponse & INewsArticle
```typescript
interface INewsResponse {
  articles: INewsArticle[];
  status: string;
  totalResults: number;
}

interface INewsArticle {
  source: INewsSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
```

### IUserInfo
```typescript
interface IUserInfo {
  name: string;
  age: number;
  address: IAddressInfo;
}

interface IAddressInfo {
  city: string;
  code: number;
}
```

## 🎨 Directives

### HighlightDirective
- **Selector**: `[appHighlight]`
- **Functionality**: Changes background color on mouse hover/leave
- **Input**: Color customization through attribute binding

### HighlightDay4Directive
- Enhanced version of the highlight directive with additional features

## 🔄 Pipes

### SearchPipe
- **Name**: `search`
- **Purpose**: Filters stock arrays based on stock name search
- **Usage**: `stocks | search:searchTerm`

### ParenthesisPipe
- **Name**: `parenthesis`
- **Purpose**: Wraps values in parentheses with optional double parentheses
- **Usage**: `value | parenthesis:true`

## 🚦 Getting Started

### Prerequisites
- Node.js (v12 or higher)
- npm (v6 or higher)
- Angular CLI (v13.0.0)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-first-angular-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start JSON Server (for stock data)**
   ```bash
   npx json-server --watch db.json --port 3000
   ```
4. **Build Application**
   ```bash
   npm run build
   or
   ng build
   ```

5. **Start Development Server**
   ```bash
   npm run start
   or
   ng serve
   ```

6. **Navigate to the application**
   ```
   http://localhost:4200
   ```

## 🌐 API Integration

### News API
- **Base URL**: `https://newsapi.org/v2/top-headlines`
- **API Key**: Configured in news service
- **Countries Supported**: India (in), USA (us), France (fr), Britain (gb), Italy (it)

### Local JSON Server
- **URL**: `http://localhost:3000/stocks`
- **Data**: Stock information from `db.json`

## 🔨 Development

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Hot Reload
The application supports hot reload for development. Changes to TypeScript, HTML, or CSS files will automatically refresh the browser.

### Component Architecture
- Use Angular CLI for generating new components
- Follow the single responsibility principle
- Implement proper lifecycle hooks (OnInit, OnDestroy)
- Use services for data management and API calls

## 🧪 Testing

### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Test Structure
- Each component has corresponding `.spec.ts` files
- Services include unit tests for HTTP calls
- Pipes and directives have dedicated test suites

### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## 🏗 Build

### Development Build
```bash
ng build
```

### Production Build
```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

### Build Optimization
- Tree shaking for unused code elimination
- Minification and compression
- AOT (Ahead-of-Time) compilation
- Bundle optimization

## 📚 Learning Objectives Covered

1. **Component Architecture**: Understanding component lifecycle, data binding, and communication
2. **Services & Dependency Injection**: Implementing business logic separation and data sharing
3. **HTTP Client**: Making API calls and handling responses
4. **RxJS**: Working with observables, subscriptions, and reactive programming
5. **Directives**: Creating custom attribute directives for DOM manipulation
6. **Pipes**: Building custom pipes for data transformation
7. **Forms**: Implementing two-way data binding with ngModel
8. **Styling**: Integrating Bootstrap and custom CSS
9. **Testing**: Writing unit tests for components, services, and pipes

## 🤝 Contributing

This is a learning project. Feel free to fork and experiment with different Angular features and concepts.

## 📄 License

This project is for educational purposes.

## 🆘 Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

For Angular framework help, visit the [Angular Documentation](https://angular.io/docs).
