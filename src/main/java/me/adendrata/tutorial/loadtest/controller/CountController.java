package me.adendrata.tutorial.loadtest.controller;

import java.time.Duration;
import java.util.concurrent.atomic.AtomicInteger;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class CountController {

  final AtomicInteger integer = new AtomicInteger();

  @GetMapping("count")
  public void getCount() {
    log.info("get count: {}", integer.get());
  }

  @PostMapping("count")
  public void count() {
    log.info("count: {}", integer.incrementAndGet());
  }

  @PostMapping("count/delay")
  public void countDelay() throws Exception {
    log.info("count: {}", integer.incrementAndGet());
    Thread.sleep(Duration.ofSeconds(10).toMillis());
  }

  @PostMapping("count/parameterized")
  public void countParameterized(@RequestHeader("user") Integer user) throws Exception {
    log.info("count: {}, user: {}", integer.incrementAndGet(), user);
    Thread.sleep(Duration.ofSeconds(10).toMillis());
  }

  @DeleteMapping("reset")
  public void reset() {
    integer.set(0);
    log.info("reset: {}", integer.get());
  }
}
