import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://mrosario:HrBqCIMMWDG2tndd@cluster0.fjhmljs.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
       useFindAndModify: false,
       useUnifiedTopology: true
    }),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
