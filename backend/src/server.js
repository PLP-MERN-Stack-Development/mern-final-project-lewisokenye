import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import bugRoutes from "./routes/bugRoutes.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";

dotenv.config();

const app = express();

// --- Middleware ---
// Security headers
app.use(helmet());

// Enable CORS
app.use(cors());

// Parse JSON requests
app.use(express.json());

// --- Routes ---
// Root route with frontend link
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to Bug Tracker Backend</h1>
    <p>Frontend is live here: 
      <a href="https://plp-mern-week-6.vercel.app" target="_blank" rel="noopener noreferrer">
        Go to Bug Tracker Frontend
      </a>
    </p>
    <p>API is available at /api/bugs</p>
    <p>Health check: <a href="/api/health">/api/health</a></p>
  `);
});

// Health check route
app.get("/api/health", (req, res) => res.json({ status: "OK" }));

// Bug routes
app.use("/api/bugs", bugRoutes);

// Error handling middleware (must be after routes)
app.use(errorHandler);

// --- MongoDB Connection ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));

export default app;
