import { Container, decorate, injectable } from 'inversify';
import { mocked } from 'ts-jest/utils';

import { MinecraftServerModel } from '../../Table/MinecraftServerTable/types/MinecraftServerModel';
import { DatabaseError } from '../../Table/MongooseError';
import { TYPES } from '../../TYPES';
import { LoggerService } from '../LoggerService/LoggerService';
import { MongooseService } from './MongooseService';

jest.mock('../../Table/MinecraftServerTable/types/MinecraftServerModel');
jest.mock('../LoggerService/LoggerService');

decorate(injectable(), LoggerService);

describe('MongooseService', () => {
  let container: Container;
  let service: MongooseService;

  const execMock = {
    exec: jest.fn()
  };
  const modelMock = {
    save    : jest.fn(),
    findById: jest.fn()
  };

  beforeAll(() => {
    container = new Container();
    container.bind<LoggerService>(TYPES.service.logger).to(LoggerService).inSingletonScope();
    container.bind<MongooseService>(TYPES.service.mongoose).to(MongooseService).inSingletonScope();

    mocked(MinecraftServerModel).mockClear();
    mocked(MinecraftServerModel).mockImplementation((): any => {
      return modelMock;
    });

    service = container.get<MongooseService>(TYPES.service.mongoose);
  });

  afterAll(() => {});

  beforeEach(() => {});

  afterEach(() => {
    jest.clearAllTimers();
    jest.restoreAllMocks();
  });

  it('to be instance.', () => {
    /* ------------------------------ 評価項目 ------------------------------ */
    expect(service).toBeTruthy();
  });

  describe('insert', () => {
    beforeAll(() => {});

    afterAll(() => {});

    beforeEach(() => {});

    afterEach(() => {});

    it('データベースにレコードの追加に成功', async () => {
      /* --------------------------- テストの前処理 --------------------------- */
      const spy = jest.spyOn(modelMock, 'save').mockResolvedValue({});

      /* ------------------------ テスト対象関数を実行 ------------------------ */
      const result = await service.insert(MinecraftServerModel, {});

      /* ------------------------------ 評価項目 ------------------------------ */
      expect(result).toEqual({});
      expect(spy).toBeCalled();
    });

    it('データベースにレコードの追加に失敗', async () => {
      /* --------------------------- テストの前処理 --------------------------- */
      const spy = jest.spyOn(modelMock, 'save').mockRejectedValue({ message: '' });

      /* ------------------------ テスト対象関数を実行 ------------------------ */
      await expect(service.insert(MinecraftServerModel, {})).rejects.toBeInstanceOf(DatabaseError);

      /* ------------------------------ 評価項目 ------------------------------ */
      expect(spy).toBeCalled();
    });
  });

  describe('findById', () => {
    beforeAll(() => {});

    afterAll(() => {});

    beforeEach(() => {});

    afterEach(() => {});

    it('データベースから検索に成功', async () => {
      /* --------------------------- テストの前処理 --------------------------- */

      const spyFinedBy = jest.spyOn(MinecraftServerModel, 'findById').mockImplementation(() => execMock as any);

      const spyExec = jest.spyOn(execMock, 'exec').mockResolvedValue({});

      /* ------------------------ テスト対象関数を実行 ------------------------ */
      const result = await service.findById(MinecraftServerModel, 'a');

      /* ------------------------------ 評価項目 ------------------------------ */
      expect(result).toEqual({});
      expect(spyFinedBy).toBeCalled();
      expect(spyFinedBy).toBeCalledWith('a');
      expect(spyExec).toBeCalled();
    });
  });
});
