import { bootstrap } from "@/transactions/bootstrap";


setImmediate(async () => {
  await bootstrap();
});