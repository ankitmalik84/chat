# Use the official Node.js image as the base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy the package.json and package-lock.json files for backend
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the backend and frontend source code
COPY ./backend /app/backend
COPY ./frontend /app/frontend

# Set environment variables
ENV PORT=5000
ENV MONGO_DB_URI=mongodb+xxxxxxxxxxxxxxxxxxxxxoh@cluster0.pvtbsrt.mongxxxxxxxp-db
ENV JWT_SECRET=CHATAPP
ENV NODE_ENV=development

# Build frontend code
RUN cd frontend && npm install && npm run build

# Expose port 5000 
EXPOSE 5000

# Define the command to run the application
CMD ["npm", "run", "start"]
