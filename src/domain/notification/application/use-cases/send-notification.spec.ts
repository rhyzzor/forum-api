import { InMemoryNotificationsRepository } from "test/repositories/in-memory-notifications-repository";
import { SendNotificationUseCase } from "./send-notification";

let inMemoryNotificationsRepository: InMemoryNotificationsRepository;
let sut: SendNotificationUseCase;

describe("send notification use case", () => {
  beforeEach(() => {
    inMemoryNotificationsRepository = new InMemoryNotificationsRepository();
    sut = new SendNotificationUseCase(inMemoryNotificationsRepository);
  });

  it("should be able to send a notification", async () => {
    const result = await sut.execute({
      recipientId: "1",
      title: "Hello World",
      content: "Hello World",
    });

    expect(result.isRight()).toBe(true);
    expect(inMemoryNotificationsRepository.items[0]).toEqual(
      result.value?.notification,
    );
  });
});
