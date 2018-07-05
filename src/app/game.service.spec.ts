import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GameService } from './game.service';
import { StatisticsService } from './statistics.service';

describe('GameService', () => {
  let http: HttpTestingController;
  let service: GameService;
  let statisticsService: StatisticsService;
  const statisticsServiceStub = {
      send: () => {}
  };
  const expectedData = [
    {id: '1', name: 'FirstGame', locale: 'ru', type: '2'},
    {id: '2', name: 'SecondGame', locale: 'ru', type: '3'},
    {id: '3', name: 'LastGame',  locale: 'en', type: '1'},
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [GameService, { provide: StatisticsService, useValue: statisticsServiceStub }]
    });
    service = TestBed.get(GameService);
    statisticsService = TestBed.get(StatisticsService);
    http = TestBed.get(HttpTestingController);
  }));
  // Проверка на отложенные запросы
  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have made one request to GET data from expected URL', () => {
    service.makeResponse().subscribe((data) => {
      expect(data).toEqual(expectedData);
    });
    const req = http.expectOne(service.gamesUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedData);
  });
  it('getGames should emits gameData', () => {
    service.getGames();
    service.dataChange.subscribe((data) => {
      expect(data).toEqual(expectedData);
    });
    const req = http.expectOne(service.gamesUrl);
    req.flush(expectedData);
  });

});
