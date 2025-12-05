import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const testConnection = async () => {
  try {
    console.log('🔄 Testing MongoDB Atlas connection...');
    console.log('Connection string:', process.env.MONGODB_URI.replace(/admin123/, '***'));
    
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000, // 10 second timeout
    });
    
    console.log('✅ MongoDB Connected Successfully!');
    console.log('📍 Host:', conn.connection.host);
    console.log('📦 Database:', conn.connection.name);
    console.log('🔌 Connection State:', conn.connection.readyState); // 1 = connected
    
    // List all collections
    const collections = await conn.connection.db.listCollections().toArray();
    console.log('\n📚 Collections in database:');
    collections.forEach(col => {
      console.log('  -', col.name);
    });
    
    // Count documents in each collection
    console.log('\n📊 Document counts:');
    for (const col of collections) {
      const count = await conn.connection.db.collection(col.name).countDocuments();
      console.log(`  - ${col.name}: ${count} documents`);
    }
    
    console.log('\n✅ MongoDB Atlas is working perfectly!');
    process.exit(0);
    
  } catch (error) {
    console.error('❌ MongoDB Connection Failed!');
    console.error('Error:', error.message);
    
    if (error.message.includes('ENOTFOUND')) {
      console.error('\n💡 Possible issues:');
      console.error('  - Check your internet connection');
      console.error('  - Verify the MongoDB URI is correct');
    } else if (error.message.includes('authentication failed')) {
      console.error('\n💡 Possible issues:');
      console.error('  - Check username and password in .env file');
      console.error('  - Verify database user exists in MongoDB Atlas');
    } else if (error.message.includes('timed out')) {
      console.error('\n💡 Possible issues:');
      console.error('  - Check Network Access settings in MongoDB Atlas');
      console.error('  - Make sure 0.0.0.0/0 is whitelisted');
      console.error('  - Check your firewall settings');
    }
    
    process.exit(1);
  }
};

testConnection();

