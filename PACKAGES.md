## 📦 Project Packages Ecosystem

Our repository is structured as a monorepo to separate core business logic from the user interface.

### 1. @pausevid/core (Backend Engine)
* Handles core API routing, authentication, and database migrations.

### 2. @pausevid/video-processor (Streaming DevOps)
* Manages video transcoding, HLS segmentation, and thumbnail extraction.

### 3. @pausevid/ui-kit (Design System)
* Shared UI component library ensuring visual consistency across mobile and web.

### 4. @pausevid/player (Custom Video Player)
* Custom-built HTML5 and native video player with gesture controls and caching.
